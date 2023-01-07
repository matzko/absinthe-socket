import type {
  GqlOperationType,
  GqlRequest
} from '@jumpn/utils-graphql/src/types'

import eventNames from './event/eventNames'

import type { RequestStatus } from './requestStatuses'
import { Result, Variables } from '../types'

type Observer<Result, Variables> = {
  onAbort?: (error: Error) => any
  onCancel?: (cancel: any) => any
  onError?: (error: Error) => any
  onStart?: (notifier: any) => any
  onResult?: (result: Result) => any
}

type Notifier<Result, Variables> = {
  activeObservers: Array<Observer<Result, Variables>>
  canceledObservers: Array<Observer<Result, Variables>>
  isActive: boolean
  operationType: GqlOperationType
  request: GqlRequest<Variables>
  requestStatus: RequestStatus
  subscriptionId?: string
}

type EventWith<Name, Payload> = {
  name: Name
  payload: Payload
}

type Payload = any

type StartEvent<Payload> = EventWith<typeof eventNames.start, Payload>

type ResultEvent<Result> = EventWith<typeof eventNames.result, Result>

type ErrorEvent = EventWith<typeof eventNames.error, Error>

type CancelEvent = EventWith<typeof eventNames.cancel, Payload>

type AbortEvent = EventWith<typeof eventNames.abort, Error>

type Event =
  | AbortEvent
  | CancelEvent
  | ErrorEvent
  | ResultEvent<any>
  | StartEvent<any>

export type {
  AbortEvent,
  CancelEvent,
  ErrorEvent,
  Event,
  ResultEvent,
  StartEvent,
  Notifier,
  Observer
}
