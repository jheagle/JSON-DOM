import siFunciona from 'si-funciona'
import getChildrenFromAttribute from './getChildrenFromAttribute'
import type { DomItem } from '../types'

/**
 * Helper for getting all domGeneral.DomItems starting at parent and having specified name attribute
 * @param name - The name searched for
 * @param item - The DomItem which may have child items matching the attribute
 * criteria
 */
const getChildrenByName: (name: string, item?: DomItem) => DomItem[] = siFunciona.curry(getChildrenFromAttribute)('name')

export default getChildrenByName
