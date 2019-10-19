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

module.exports.detectEdgeHtml = detectIeEdge;
