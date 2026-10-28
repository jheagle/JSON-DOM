import createDomItem from './createDomItem'
import onBodyLoad from 'si-funciona/dist/helpers/functions/onBodyLoad'
import type { DomItem } from '../types'

/**
 * Initiate the children of Root / DocumentItem. This is a helper for {@link documentDomItem}.
 */
const initChildren = (): DomItem[] => {
  const head = document.head
  const body = document.body
  const children = [
    createDomItem({
      nodeName: 'head',
      attributes: {},
      element: head,
      children: []
    }),
    createDomItem({
      nodeName: 'body',
      attributes: {},
      element: body,
      children: []
    })
  ]
  if (!head || !body) {
    onBodyLoad(() => {
      if (children[1].element === null) {
        children[0].element = document.head
        children[1].element = document.body
      }
      return children
    })
  }
  return children
}

export default initChildren
