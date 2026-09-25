import 'core-js/stable'
import addDomItemProperties from './objects/addDomItemProperties'
import appendChild from './tree/appendChild'
import createDomItem from './objects/createDomItem'
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
import initChildren from './objects/initChildren'
import initRoot from './objects/initRoot'
import removeChild from './tree/removeChild'
import setParentItemReferences from './tree/setParentItemReferences'

export default {
  addDomItemProperties,
  appendChild,
  createDomItem,
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
  initChildren,
  initRoot,
  removeChild,
  setParentItemReferences
}
