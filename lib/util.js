/**
 * Converts objects from osm-p2p to objects compatible with the OSM JSON format
 * @param {object} doc object from osm-p2p
 * @return {object} object compatible with the OSM JSON format
 */
function refs2nodes (doc) {
  var element = {}
  for (var prop in doc) {
    if (!doc.hasOwnProperty(prop)) continue
    if (prop === 'refs') {
      element.nodes = doc.refs
    } else {
      element[prop] = doc[prop]
    }
  }
  return element
}

module.exports = {
  refs2nodes: refs2nodes,
}
