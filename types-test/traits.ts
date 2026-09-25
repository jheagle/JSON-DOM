// Compiled (never run) by `npm run typecheck`: each @ts-expect-error line must really be an error, otherwise the
// compiler reports the unused directive - so these pin down what the trait types promise.
import createCoreItem from '../src/domItem/objects/createCoreItem'
import createDomItem from '../src/domItem/objects/createDomItem'
import hasTrait from '../src/domItem/traits/hasTrait'
import hasTraits from '../src/domItem/traits/hasTraits'
import isDomItem from '../src/domItem/traits/isDomItem'
import withTrait from '../src/domItem/traits/withTrait'
import updateElement from '../src/render/updateElement'
import domItemToJson from '../src/deflate/domItemToJson'
import type { CoreItem, DomItem } from '../src/domItem/types'

// A library adds its traits by merging into TraitRegistry
declare module '../src/domItem/types' {
  interface TraitRegistry {
    'matrix.column': { point: { x: number, y: number, z: number } }
    'game.tile': { hasShip: boolean, isHit: boolean }
  }
}

const generic: CoreItem = createCoreItem()

// Composing traits puts all of their data, typed, on the one flat item
const tile = withTrait(withTrait(createCoreItem(), 'matrix.column', { point: { x: 1, y: 2, z: 0 } }), 'game.tile', { hasShip: false, isHit: false })
tile.hasShip = true
tile.point.x = 3
const flag: true = tile.has['game.tile']
void flag

// Checking narrows: one trait, or several at once
if (hasTrait(generic, 'game.tile')) {
  const hit: boolean = generic.isHit
  void hit
}
if (hasTraits(generic, 'game.tile', 'matrix.column')) {
  const both: boolean = generic.isHit && generic.point.x > 0
  void both
}

// The generic item is enough for deflate; the render trait is what render needs
domItemToJson(generic)
const rendered: DomItem = createDomItem()
updateElement(rendered)
// @ts-expect-error a render function refuses an item which does not have the render trait
updateElement(generic)
// @ts-expect-error one item having the render trait does not make its whole tree renderable
if (hasTrait(generic, 'render')) updateElement(generic)
if (isDomItem(generic)) updateElement(generic)

// @ts-expect-error a trait which is not registered is refused
hasTrait(generic, 'nonsense')
// @ts-expect-error the data a trait puts on an item is required
withTrait(generic, 'game.tile', { hasShip: false })
// @ts-expect-error the data of a trait which has not been checked for is not there
generic.hasShip
// @ts-expect-error a DomItem's children have the render trait too, so a core item is not one
rendered.children.push(generic)
