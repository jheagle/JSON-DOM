'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _addDomItemProperties = _interopRequireDefault(require('./functions/addDomItemProperties.js'))
const _appendChild = _interopRequireDefault(require('./functions/appendChild.js'))
const _domItemChanges = _interopRequireDefault(require('./functions/domItemChanges.js'))
const _domItemHasAttribute = _interopRequireDefault(require('./functions/domItemHasAttribute.js'))
const _domItemToJson = _interopRequireDefault(require('./functions/domItemToJson.js'))
const _elementChanges = _interopRequireDefault(require('./functions/elementChanges.js'))
const _elementHasAttribute = _interopRequireDefault(require('./functions/elementHasAttribute.js'))
const _gatherChildItems = _interopRequireDefault(require('./functions/gatherChildItems.js'))
const _generateElement = _interopRequireDefault(require('./functions/generateElement.js'))
const _getAssignedStyles = _interopRequireDefault(require('./functions/getAssignedStyles.js'))
const _getChildTest = _interopRequireDefault(require('./functions/getChildTest.js'))
const _getChildrenByClass = _interopRequireDefault(require('./functions/getChildrenByClass.js'))
const _getChildrenByName = _interopRequireDefault(require('./functions/getChildrenByName.js'))
const _getChildrenFromAttribute = _interopRequireDefault(require('./functions/getChildrenFromAttribute.js'))
const _getParentsByClass = _interopRequireDefault(require('./functions/getParentsByClass.js'))
const _getParentsByName = _interopRequireDefault(require('./functions/getParentsByName.js'))
const _getParentsByTagName = _interopRequireDefault(require('./functions/getParentsByTagName.js'))
const _getParentsFromAttribute = _interopRequireDefault(require('./functions/getParentsFromAttribute.js'))
const _getTopParentItem = _interopRequireDefault(require('./functions/getTopParentItem.js'))
const _jsonToDomItem = _interopRequireDefault(require('./functions/jsonToDomItem.js'))
const _removeChild = _interopRequireDefault(require('./functions/removeChild.js'))
const _renderHtml = _interopRequireDefault(require('./functions/renderHtml.js'))
const _removeEmptyProperties = _interopRequireDefault(require('./functions/removeEmptyProperties.js'))
const _setParentItemReferences = _interopRequireDefault(require('./functions/setParentItemReferences.js'))
const _updateChildNodes = _interopRequireDefault(require('./functions/updateChildNodes.js'))
const _updateChildren = _interopRequireDefault(require('./functions/updateChildren.js'))
const _updateDomItem = _interopRequireDefault(require('./functions/updateDomItem.js'))
const _updateDomItems = _interopRequireDefault(require('./functions/updateDomItems.js'))
const _updateElement = _interopRequireDefault(require('./functions/updateElement.js'))
const _updateElements = _interopRequireDefault(require('./functions/updateElements.js'))
const _createChangeList = _interopRequireDefault(require('./objects/createChangeList.js'))
const _createDomItem = _interopRequireDefault(require('./objects/createDomItem.js'))
const _documentDomItem = _interopRequireDefault(require('./objects/documentDomItem.js'))
const _documentItem = _interopRequireDefault(require('./objects/documentItem.js'))
const _initChildren = _interopRequireDefault(require('./objects/initChildren.js'))
const _initRoot = _interopRequireDefault(require('./objects/initRoot.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * @file Core Virtual DOM (DomItem tree) management
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domGeneral
 * @memberOf module:jsonDom
 */
const _default = exports.default = {
  addDomItemProperties: _addDomItemProperties.default,
  appendChild: _appendChild.default,
  domItemChanges: _domItemChanges.default,
  domItemHasAttribute: _domItemHasAttribute.default,
  domItemToJson: _domItemToJson.default,
  elementChanges: _elementChanges.default,
  elementHasAttribute: _elementHasAttribute.default,
  gatherChildItems: _gatherChildItems.default,
  generateElement: _generateElement.default,
  getAssignedStyles: _getAssignedStyles.default,
  getChildTest: _getChildTest.default,
  getChildrenByClass: _getChildrenByClass.default,
  getChildrenByName: _getChildrenByName.default,
  getChildrenFromAttribute: _getChildrenFromAttribute.default,
  getParentsByClass: _getParentsByClass.default,
  getParentsByName: _getParentsByName.default,
  getParentsByTagName: _getParentsByTagName.default,
  getParentsFromAttribute: _getParentsFromAttribute.default,
  getTopParentItem: _getTopParentItem.default,
  jsonToDomItem: _jsonToDomItem.default,
  removeChild: _removeChild.default,
  renderHtml: _renderHtml.default,
  removeEmptyProperties: _removeEmptyProperties.default,
  setParentItemReferences: _setParentItemReferences.default,
  updateChildNodes: _updateChildNodes.default,
  updateChildren: _updateChildren.default,
  updateDomItem: _updateDomItem.default,
  updateDomItems: _updateDomItems.default,
  updateElement: _updateElement.default,
  updateElements: _updateElements.default,
  createChangeList: _createChangeList.default,
  createDomItem: _createDomItem.default,
  documentDomItem: _documentDomItem.default,
  documentItem: _documentItem.default,
  initChildren: _initChildren.default,
  initRoot: _initRoot.default
}
