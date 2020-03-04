import { Base64 } from './base64';

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

    acc[keyName] = keyValue

    return acc
  }, {})
}
