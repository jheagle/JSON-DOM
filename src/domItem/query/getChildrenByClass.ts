import 'core-js/stable'
import siFunciona from 'si-funciona'
import getChildrenFromAttribute from './getChildrenFromAttribute'
import type { DomItem } from '../types'

/**
 * Helper for getting all domGeneral.DomItems starting at parent and having specified className attribute
 * @param className - The className searched for
 * @param item - The DomItem which may have child items matching the attribute
 * criteria
 */
const getChildrenByClass: (className: string, item?: DomItem) => DomItem[] = siFunciona.curry(getChildrenFromAttribute)('className')

export default getChildrenByClass
