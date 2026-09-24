import 'core-js/stable'
import setParentItemReferences from '../domItem/tree/setParentItemReferences'
import addDomItemProperties from '../domItem/objects/addDomItemProperties'

/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domGeneral
 * @param {string} jsonString
 * @returns {DomItem}
 */
const jsonToDomItem = jsonString => {
  const parsedJson = setParentItemReferences(
    addDomItemProperties(
      JSON.parse(jsonString)
    )
  )
  if (parsedJson.nodeName === '#document') {
    parsedJson.element = document
    parsedJson.head = parsedJson.children[0]
    parsedJson.body = parsedJson.children[1]
  }
  return parsedJson
}

export default jsonToDomItem
