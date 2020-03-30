import SwaggerExpress from 'swagger-express-mw'
import express from 'express'
import Security from './api/security/securityHandlers'
import swaggerUi from 'swagger-ui-express'
import { log } from './api/utils/node'
import { APP_ROOT } from './config/config'

// eslint-disable-next-line no-unused-vars
import morgan from 'morgan'
import './config'
import web3Service from './api/services/web3Service'
import { processLog, processLogs, saveAllEvents } from './api/services/contractServices'
import {GraphdbService} from './api/services/graphdbService'

const app = express()

const config = {
  appRoot: APP_ROOT,
  swaggerSecurityHandlers: Security
}

app.use(morgan(process.env.LOG))// app.use(logger(process.env.LOG))

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) { throw err }

  // install middleware
  swaggerExpress.register(app)

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerExpress.runner.swagger, true))

  const port = process.env.PORT || 10012

  app.listen(port, async () => {
    const contracts = ['AcademicConsortium', 'AcademicCertificate']
    // console.log('graphdb triples', graphdb.triples())

    const graphdb = new GraphdbService()
    await graphdb.initCliente()

    let allEvents = []
    web3Service.eth.getPastLogs({ fromBlock: 0, toBlock: 'latest' })
    .then(async(logs) => {
      if (logs) {
        allEvents = processLogs(contracts, logs)

        await saveAllEvents(allEvents, graphdb)
      }
    })
    .then(() => console.log('Done'))
    .catch(error => console.log('Error', error))

    web3Service.eth.subscribe(
      'logs', { fromBlock: '0', toBlock: 'latest' }, (error, log) => {
        if (log) {
          const event = processLog(log, contracts)
          console.log('Event proccesed', event)
        }
      }
    )
    .on('data', function (log) {
      const event = processLog(log, contracts)
      console.log('Event proccesed', event)
    })
    .on('changed', function (log) {
      const event = processLog(log, contracts)
      console.log('Event proccesed', event)
    })
  })

  log(`Server start http://127.0.0.1:${port}`)
})

export default app // for testing
