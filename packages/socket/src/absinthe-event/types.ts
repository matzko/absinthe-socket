import absintheEventNames from './absintheEventNames'

import type { AbsintheEventName } from './absintheEventNames'

type AbsintheEventWith<AbsintheEventName, Payload> = {
  name: AbsintheEventName
  payload: Payload
}

type AbsintheUnsubscribeEvent = AbsintheEventWith<
  typeof absintheEventNames.unsubscribe,
  {
    subscriptionId?: string
  }
>

type AbsintheDocEvent = any

type AbsintheEvent = AbsintheDocEvent | AbsintheUnsubscribeEvent

export type { AbsintheEvent, AbsintheDocEvent, AbsintheUnsubscribeEvent }
