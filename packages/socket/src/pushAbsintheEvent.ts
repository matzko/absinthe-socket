import map from '../@jumpn/utils-composite/src/map'

import type { GqlRequest } from '../@jumpn/utils-graphql/src/types'

import handlePush from './handlePush'
import notifierFind from './notifier/find'

import type { AbsintheEvent } from './absinthe-event/types'
import type { AbsintheSocket, NotifierPushHandler, Variables } from './types'

const getPushHandlerMethodGetter =
  (absintheSocket, request) =>
  (handle) =>
  (...args) => {
    const notifier = notifierFind(absintheSocket.notifiers, 'request', request)

    if (notifier) {
      handle(absintheSocket, notifier, ...args)
    }
  }

function getPushHandler(absintheSocket, request, notifierPushHandler) {
  return map(
    getPushHandlerMethodGetter(absintheSocket, request),
    notifierPushHandler
  )
}

function pushAbsintheEvent(
  absintheSocket: AbsintheSocket,
  request: GqlRequest<Variables>,
  notifierPushHandler: NotifierPushHandler<Response>,
  absintheEvent: AbsintheEvent
) {
  handlePush(
    absintheSocket.channel.push(absintheEvent.name, absintheEvent.payload),
    getPushHandler(absintheSocket, request, notifierPushHandler)
  )

  return absintheSocket
}

export default pushAbsintheEvent
