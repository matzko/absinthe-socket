import absintheEventNames from './absintheEventNames'

import type {
  AbsintheDocEvent,
  AbsintheEvent,
  AbsintheUnsubscribeEvent
} from './types'

const createAbsintheUnsubscribeEvent = (
  payload: AbsintheEvent
): AbsintheUnsubscribeEvent => ({
  payload,
  name: absintheEventNames.unsubscribe
})

const createAbsintheDocEvent = <Variables>(
  payload: AbsintheEvent
): AbsintheDocEvent => ({
  payload,
  name: absintheEventNames.doc
})

export { createAbsintheDocEvent, createAbsintheUnsubscribeEvent }
