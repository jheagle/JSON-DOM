/**
 * @file Core Dom management functions
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domFunctions
 * @memberOf module:jsonDom
 */
import 'core-js/stable'
import addDomItemProperties from './functions/addDomItemProperties.js'
import appendChild from './functions/appendChild.js'
import domItemChanges from './functions/domItemChanges.js'
import domItemHasAttribute from './functions/domItemHasAttribute.js'
import domItemToJson from './functions/domItemToJson.js'
import elementChanges from './functions/elementChanges.js'
import elementHasAttribute from './functions/elementHasAttribute.js'
import gatherChildItems from './functions/gatherChildItems.js'
import generateElement from './functions/generateElement.js'
import getAssignedStyles from './functions/getAssignedStyles.js'
import getChildTest from './functions/getChildTest.js'
import getChildrenByClass from './functions/getChildrenByClass.js'
import getChildrenByName from './functions/getChildrenByName.js'
import getChildrenFromAttribute from './functions/getChildrenFromAttribute.js'
import getParentsByClass from './functions/getParentsByClass.js'
import getParentsByName from './functions/getParentsByName.js'
import getParentsByTagName from './functions/getParentsByTagName.js'
import getParentsFromAttribute from './functions/getParentsFromAttribute.js'
import getTopParentItem from './functions/getTopParentItem.js'
import jsonToDomItem from './functions/jsonToDomItem.js'
import removeChild from './functions/removeChild.js'
import renderHtml from './functions/renderHtml.js'
import removeEmptyProperties from './functions/removeEmptyProperties.js'
import setParentItemReferences from './functions/setParentItemReferences.js'
import updateChildNodes from './functions/updateChildNodes.js'
import updateChildren from './functions/updateChildren.js'
import updateDomItem from './functions/updateDomItem.js'
import updateDomItems from './functions/updateDomItems.js'
import updateElement from './functions/updateElement.js'
import updateElements from './functions/updateElements.js'
import createChangeList from './objects/createChangeList.js'
import createDomItem from './objects/createDomItem.js'
import documentDomItem from './objects/documentDomItem.js'
import documentItem from './objects/documentItem.js'
import initChildren from './objects/initChildren.js'
import initRoot from './objects/initRoot.js'

export default {
  addDomItemProperties,
  appendChild,
  domItemChanges,
  domItemHasAttribute,
  domItemToJson,
  elementChanges,
  elementHasAttribute,
  gatherChildItems,
  generateElement,
  getAssignedStyles,
  getChildTest,
  getChildrenByClass,
  getChildrenByName,
  getChildrenFromAttribute,
  getParentsByClass,
  getParentsByName,
  getParentsByTagName,
  getParentsFromAttribute,
  getTopParentItem,
  jsonToDomItem,
  removeChild,
  renderHtml,
  removeEmptyProperties,
  setParentItemReferences,
  updateChildNodes,
  updateChildren,
  updateDomItem,
  updateDomItems,
  updateElement,
  updateElements,
  createChangeList,
  createDomItem,
  documentDomItem,
  documentItem,
  initChildren,
  initRoot,
}
