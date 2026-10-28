import updateElement from './updateElement'
import type { DomElement, DomItem } from '../domItem/types'

/**
 * Update all the childNodes for this domItem element to mach domItem children.
 * @param domItem
 */
const updateChildNodes = (domItem: DomItem): DomItem => {
  if (!domItem.element) {
    domItem = updateElement(domItem)
  }
  if (!domItem.children || !domItem.children.length) {
    domItem.children = []
    return domItem
  }
  const element = domItem.element as Node
  const previousChildNodes = Array.from(element.childNodes)
  domItem.children
    .map((child, index) => {
      const existing = previousChildNodes.find(childNode => childNode === child.element)
      let childNode = existing ?? child.element
      if (!childNode) {
        childNode = updateElement(child).element
      }
      if (!previousChildNodes[index]) {
        element.appendChild(childNode as Node)
        return childNode
      }
      if (childNode !== previousChildNodes[index]) {
        element.replaceChild(childNode as Node, previousChildNodes[index])
      }
      return childNode
    })
    .forEach((childNode, index) => {
      domItem.children[index].element = childNode as DomElement
    })
  if (element.childNodes.length > domItem.children.length) {
    const maxLength = domItem.children.length
    let nodeToRemove = element.childNodes[maxLength]
    while (nodeToRemove) {
      element.removeChild(nodeToRemove)
      nodeToRemove = element.childNodes[maxLength]
    }
  }
  return domItem
}

export default updateChildNodes
