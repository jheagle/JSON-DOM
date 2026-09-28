/**
 * Core Virtual DOM (DomItem tree) management: building items, the traits they carry, and finding and changing
 * items in a tree.
 */
import 'core-js/stable'
import addDomItemProperties from './objects/addDomItemProperties'
import appendChild from './tree/appendChild'
import createCoreItem from './objects/createCoreItem'
import createDomItem from './objects/createDomItem'
import defineTrait from './traits/defineTrait'
import documentDomItem from './objects/documentDomItem'
import documentItem from './objects/documentItem'
import gatherChildItems from './query/gatherChildItems'
import getChildrenByClass from './query/getChildrenByClass'
import getChildrenByName from './query/getChildrenByName'
import getChildrenFromAttribute from './query/getChildrenFromAttribute'
import getChildTest from './query/getChildTest'
import getParentsByClass from './query/getParentsByClass'
import getParentsByName from './query/getParentsByName'
import getParentsByTagName from './query/getParentsByTagName'
import getParentsFromAttribute from './query/getParentsFromAttribute'
import getTopParentItem from './tree/getTopParentItem'
import getTraitDefinition from './traits/getTraitDefinition'
import hasTrait from './traits/hasTrait'
import hasTraits from './traits/hasTraits'
import initChildren from './objects/initChildren'
import initRoot from './objects/initRoot'
import insertChild from './tree/insertChild'
import isDomItem from './traits/isDomItem'
import removeChild from './tree/removeChild'
import setParentItemReferences from './tree/setParentItemReferences'
import withTrait from './traits/withTrait'

export default {
  addDomItemProperties,
  appendChild,
  createCoreItem,
  createDomItem,
  defineTrait,
  documentDomItem,
  documentItem,
  gatherChildItems,
  getChildrenByClass,
  getChildrenByName,
  getChildrenFromAttribute,
  getChildTest,
  getParentsByClass,
  getParentsByName,
  getParentsByTagName,
  getParentsFromAttribute,
  getTopParentItem,
  getTraitDefinition,
  hasTrait,
  hasTraits,
  initChildren,
  initRoot,
  insertChild,
  isDomItem,
  removeChild,
  setParentItemReferences,
  withTrait
}
