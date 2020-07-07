import { Base64 } from './base64'

const url = require('url');

export const getUrlParams = (uri) => {
  // eslint-disable-next-line no-undef
  const urlPath = new URL(uri)

  return urlPath.pathname.slice(1, urlPath.lenght)
}

export const getProperties = uriParams => {
  return uriParams.reduce((acc, { p, o }, index) => {
    if (index === 0) {
      return acc
    }
    const keyName = getUrlParams(p)

    let keyValue = getUrlParams(o)

    if (keyName === 'name' || keyName === 'hasTitle' || keyName === 'siglas') {
      const data = Base64.decode(keyValue)
      acc[keyName] = data.substring(0, data.length - 1)
    } else {
      acc[keyName] = keyValue
    }

    return acc
  }, {})
}
