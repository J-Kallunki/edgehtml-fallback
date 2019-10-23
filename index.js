function detectIeEdge() {
  if (typeof window === 'undefined') {
    return false;
  }
  if (
    window.document.documentMode ||
    /Edge/.test(window.navigator.userAgent) ||
    window.navigator.userAgent.indexOf('MSIE') > 0
  ) {
    return true;
  }
  return false;
}

function ifNodeList(element) {
  if (
    typeof element.length === 'number' &&
    typeof element.item !== 'undefined' &&
    typeof element.nextNode === 'function' &&
    typeof element.reset === 'function'
  ) {
    return true;
  }
  return false;
}

function ifDevelopEnvironment() {
  if (process !== undefined && process.env !== undefined && process.env.NODE_ENV !== 'production') {
    return true;
  }
  return false;
}

function getElement(el) {
  if (typeof window === 'undefined') {
    return false;
  }
  if (el === undefined || el === null) {
    return window.document;
  }
  return el;
}

module.exports.detectEdgeHtml = detectIeEdge;
