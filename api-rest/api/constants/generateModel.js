export const generateTriples = (keyMain, mainPrefix, dataIn, objectProperties) => {
  const main = `sb:${dataIn[keyMain]}`
  const triples = []

  triples.push(`${main} rdf:type ${mainPrefix}`)

  triples.push(`${objectProperties
      .reduce((acc, { name, prefix }, index) => {
        // entest:TestClass rdf:type owl:Class
        if (dataIn[name]) {
          acc = `${acc} ${prefix} sb:${dataIn[name]};`
        }

        return acc
      }, `${main}`).slice(0, -1)}.`)

  return { main, triples }
}
