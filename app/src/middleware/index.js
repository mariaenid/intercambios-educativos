import { generateStore, EventActions } from 'drizzle'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../reducers/index'
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

import drizzleOptions from '../drizzleOptions'
import { toast } from 'react-toastify'
const loggerMiddleware = createLogger()

const contractEventNotifier = store => next => action => {
    if (action.type === EventActions.EVENT_FIRED) {
      const contract = action.name
      const contractEvent = action.event.event
      const message = action.event.returnValues._message
      const display = `${contract}(${contractEvent}): ${message}`

      toast.success(display, { position: toast.POSITION.TOP_RIGHT })
    }
    return next(action)
  }

  const apiMiddlewareResponse = ({dispatch}) => next => action => {
    return next (action);
  }

const appMiddlewares = [ contractEventNotifier ]

const store =  generateStore({
drizzleOptions,
appMiddlewares,
disableReduxDevTools: false,  // enable ReduxDevTools!,
},
reducers,
applyMiddleware(thunk, apiMiddleware, loggerMiddleware, apiMiddlewareResponse)
)

export default store

