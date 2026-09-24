import 'core-js/stable'
import addDomItemProperties from './objects/addDomItemProperties.js'
import appendChild from './tree/appendChild.js'
import createDomItem from './objects/createDomItem.js'
import documentDomItem from './objects/documentDomItem.js'
import documentItem from './objects/documentItem.js'
import gatherChildItems from './query/gatherChildItems.js'
import getChildrenByClass from './query/getChildrenByClass.js'
import getChildrenByName from './query/getChildrenByName.js'
import getChildrenFromAttribute from './query/getChildrenFromAttribute.js'
import getChildTest from './query/getChildTest.js'
import getParentsByClass from './query/getParentsByClass.js'
import getParentsByName from './query/getParentsByName.js'
import getParentsByTagName from './query/getParentsByTagName.js'
import getParentsFromAttribute from './query/getParentsFromAttribute.js'
import getTopParentItem from './tree/getTopParentItem.js'
import initChildren from './objects/initChildren.js'
import initRoot from './objects/initRoot.js'
import removeChild from './tree/removeChild.js'
import setParentItemReferences from './tree/setParentItemReferences.js'

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
