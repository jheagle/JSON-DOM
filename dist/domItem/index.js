'use strict'

const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
const addDomItemProperties_1 = __importDefault(require('./objects/addDomItemProperties'))
const appendChild_1 = __importDefault(require('./tree/appendChild'))
const createCoreItem_1 = __importDefault(require('./objects/createCoreItem'))
const createDomItem_1 = __importDefault(require('./objects/createDomItem'))
const defineTrait_1 = __importDefault(require('./traits/defineTrait'))
const documentDomItem_1 = __importDefault(require('./objects/documentDomItem'))
const documentItem_1 = __importDefault(require('./objects/documentItem'))
const gatherChildItems_1 = __importDefault(require('./query/gatherChildItems'))
const getChildrenByClass_1 = __importDefault(require('./query/getChildrenByClass'))
const getChildrenByName_1 = __importDefault(require('./query/getChildrenByName'))
const getChildrenFromAttribute_1 = __importDefault(require('./query/getChildrenFromAttribute'))
const getChildTest_1 = __importDefault(require('./query/getChildTest'))
const getParentsByClass_1 = __importDefault(require('./query/getParentsByClass'))
const getParentsByName_1 = __importDefault(require('./query/getParentsByName'))
const getParentsByTagName_1 = __importDefault(require('./query/getParentsByTagName'))
const getParentsFromAttribute_1 = __importDefault(require('./query/getParentsFromAttribute'))
const getTopParentItem_1 = __importDefault(require('./tree/getTopParentItem'))
const getTraitDefinition_1 = __importDefault(require('./traits/getTraitDefinition'))
const hasTrait_1 = __importDefault(require('./traits/hasTrait'))
const hasTraits_1 = __importDefault(require('./traits/hasTraits'))
const initChildren_1 = __importDefault(require('./objects/initChildren'))
const initRoot_1 = __importDefault(require('./objects/initRoot'))
const isDomItem_1 = __importDefault(require('./traits/isDomItem'))
const removeChild_1 = __importDefault(require('./tree/removeChild'))
const setParentItemReferences_1 = __importDefault(require('./tree/setParentItemReferences'))
const withTrait_1 = __importDefault(require('./traits/withTrait'))
exports.default = {
  addDomItemProperties: addDomItemProperties_1.default,
  appendChild: appendChild_1.default,
  createCoreItem: createCoreItem_1.default,
  createDomItem: createDomItem_1.default,
  defineTrait: defineTrait_1.default,
  documentDomItem: documentDomItem_1.default,
  documentItem: documentItem_1.default,
  gatherChildItems: gatherChildItems_1.default,
  getChildrenByClass: getChildrenByClass_1.default,
  getChildrenByName: getChildrenByName_1.default,
  getChildrenFromAttribute: getChildrenFromAttribute_1.default,
  getChildTest: getChildTest_1.default,
  getParentsByClass: getParentsByClass_1.default,
  getParentsByName: getParentsByName_1.default,
  getParentsByTagName: getParentsByTagName_1.default,
  getParentsFromAttribute: getParentsFromAttribute_1.default,
  getTopParentItem: getTopParentItem_1.default,
  getTraitDefinition: getTraitDefinition_1.default,
  hasTrait: hasTrait_1.default,
  hasTraits: hasTraits_1.default,
  initChildren: initChildren_1.default,
  initRoot: initRoot_1.default,
  isDomItem: isDomItem_1.default,
  removeChild: removeChild_1.default,
  setParentItemReferences: setParentItemReferences_1.default,
  withTrait: withTrait_1.default
}
