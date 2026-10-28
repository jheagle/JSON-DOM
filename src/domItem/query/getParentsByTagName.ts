import siFunciona from 'si-funciona'
import getParentsFromAttribute from './getParentsFromAttribute'
import type { DomItem } from '../types'

/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified nodeName
 * @param nodeName - The nodeName to search for
 * @param item - The DomItem which may have parent items matching the
 * attribute criteria
 */
const getParentsByTagName: (nodeName: string, item?: DomItem) => DomItem[] = siFunciona.curry(getParentsFromAttribute)('nodeName')

export default getParentsByTagName
