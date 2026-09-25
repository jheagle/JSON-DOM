import 'core-js/stable'
import siFunciona from 'si-funciona'
import getParentsFromAttribute from './getParentsFromAttribute'
import type { DomItem } from '../types'

/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified className attribute
 * @param className - The className to search for
 * @param item - The DomItem which may have parent items matching the
 * attribute criteria
 */
const getParentsByClass: (className: string, item?: DomItem) => DomItem[] = siFunciona.curry(getParentsFromAttribute)('className')

export default getParentsByClass
