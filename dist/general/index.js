'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _addDomItemProperties = _interopRequireDefault(require('./functions/addDomItemProperties.js'))
var _appendChild = _interopRequireDefault(require('./functions/appendChild.js'))
var _domItemChanges = _interopRequireDefault(require('./functions/domItemChanges.js'))
var _domItemHasAttribute = _interopRequireDefault(require('./functions/domItemHasAttribute.js'))
var _domItemToJson = _interopRequireDefault(require('./functions/domItemToJson.js'))
var _elementChanges = _interopRequireDefault(require('./functions/elementChanges.js'))
var _elementHasAttribute = _interopRequireDefault(require('./functions/elementHasAttribute.js'))
var _gatherChildItems = _interopRequireDefault(require('./functions/gatherChildItems.js'))
var _generateElement = _interopRequireDefault(require('./functions/generateElement.js'))
var _getAssignedStyles = _interopRequireDefault(require('./functions/getAssignedStyles.js'))
var _getChildTest = _interopRequireDefault(require('./functions/getChildTest.js'))
var _getChildrenByClass = _interopRequireDefault(require('./functions/getChildrenByClass.js'))
var _getChildrenByName = _interopRequireDefault(require('./functions/getChildrenByName.js'))
var _getChildrenFromAttribute = _interopRequireDefault(require('./functions/getChildrenFromAttribute.js'))
var _getParentsByClass = _interopRequireDefault(require('./functions/getParentsByClass.js'))
var _getParentsByName = _interopRequireDefault(require('./functions/getParentsByName.js'))
var _getParentsByTagName = _interopRequireDefault(require('./functions/getParentsByTagName.js'))
var _getParentsFromAttribute = _interopRequireDefault(require('./functions/getParentsFromAttribute.js'))
var _getTopParentItem = _interopRequireDefault(require('./functions/getTopParentItem.js'))
var _jsonToDomItem = _interopRequireDefault(require('./functions/jsonToDomItem.js'))
var _removeChild = _interopRequireDefault(require('./functions/removeChild.js'))
var _renderHtml = _interopRequireDefault(require('./functions/renderHtml.js'))
var _removeEmptyProperties = _interopRequireDefault(require('./functions/removeEmptyProperties.js'))
var _setParentItemReferences = _interopRequireDefault(require('./functions/setParentItemReferences.js'))
var _updateChildNodes = _interopRequireDefault(require('./functions/updateChildNodes.js'))
var _updateChildren = _interopRequireDefault(require('./functions/updateChildren.js'))
var _updateDomItem = _interopRequireDefault(require('./functions/updateDomItem.js'))
var _updateDomItems = _interopRequireDefault(require('./functions/updateDomItems.js'))
var _updateElement = _interopRequireDefault(require('./functions/updateElement.js'))
var _updateElements = _interopRequireDefault(require('./functions/updateElements.js'))
var _createChangeList = _interopRequireDefault(require('./objects/createChangeList.js'))
var _createDomItem = _interopRequireDefault(require('./objects/createDomItem.js'))
var _documentDomItem = _interopRequireDefault(require('./objects/documentDomItem.js'))
var _documentItem = _interopRequireDefault(require('./objects/documentItem.js'))
var _initChildren = _interopRequireDefault(require('./objects/initChildren.js'))
var _initRoot = _interopRequireDefault(require('./objects/initRoot.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * @file Core Dom management functions
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domFunctions
 * @memberOf module:jsonDom
 */
var _default = exports.default = {
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
