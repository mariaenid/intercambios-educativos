export const generateTriples = (keyMain, mainPrefix, dataIn, objectProperties) => {
  const main = `sb:${dataIn[keyMain]}`
  const triples = []

  triples.push(`${main} rdf:type ${mainPrefix}`)

  triples.push(`${objectProperties
      .reduce((acc, { name, prefix }, index) => {
        // entest:TestClass rdf:type owl:Class
        if (!dataIn[name]) {
          return
        }

        acc = `${acc} ${prefix} ${dataIn[name]}`
        if (index < Object.keys(dataIn).length - 1) {
          acc = `${acc}; `
        }

        return acc
      }, `${main}`)}.`)

  return { main, triples }
}
