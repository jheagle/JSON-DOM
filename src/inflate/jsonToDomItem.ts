import 'core-js/stable'
import setParentItemReferences from '../domItem/tree/setParentItemReferences'
import addDomItemProperties from '../domItem/objects/addDomItemProperties'
import type { DomItem, DomItemRoot } from '../domItem/types'

/**
 * Convert DOM Item to JSON string.
 * @param jsonString
 */
const jsonToDomItem = (jsonString: string): DomItem => {
  const parsedJson = setParentItemReferences(
    addDomItemProperties(
      JSON.parse(jsonString)
    )
  )
  if (parsedJson.nodeName === '#document') {
    const root = parsedJson as DomItemRoot
    root.element = document
    root.head = root.children[0]
    root.body = root.children[1]
  }
  return parsedJson
}

export default jsonToDomItem
