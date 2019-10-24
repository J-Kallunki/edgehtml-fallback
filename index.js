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

function removeTags(tags) {
  if (
    HTMLCollection.prototype.isPrototypeOf(tags) ||
    NodeList.prototype.isPrototypeOf(tags) ||
    ifNodeList(tags)
  ) {
    var devEnv = ifDevelopEnvironment();
    for (var i = 0; i < tags.length; i++) {
      var el = tags[i];
      if (devEnv && console !== undefined) {
        console.log("Removing element:", el);
      }
      el.parentNode.removeChild(el);
    }
    return true;
  }
  return false;
}

function removeStyleTags(element) {
  if (element === false || element === undefined || element === null) {
    return false;
  }
  var tags = element.getElementsByTagName('style');
  if (tags !== undefined && tags.length > 0) {
    removeTags(tags);
  } else {
    var devEnv = ifDevelopEnvironment();
    if (devEnv && console !== undefined) {
      console.log("No style-tags found.");
    }
  }
  return true;
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
