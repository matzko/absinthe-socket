import requestToCompat from '../@jumpn/utils-graphql/src/requestToCompat'

import abortNotifier from './abortNotifier'
import notifierNotifyActive from './notifier/notifyActive'
import pushAbsintheEvent from './pushAbsintheEvent'
import refreshNotifier from './refreshNotifier'
import requestStatuses from './notifier/requestStatuses'
import { createAbsintheDocEvent } from './absinthe-event/absintheEventCreators'
import { createErrorEvent } from './notifier/event/eventCreators'

import type { AbsintheSocket, NotifierPushHandler } from './types'
import type { Notifier } from './notifier/types'

const pushAbsintheDocEvent = (
  absintheSocket,
  { request },
  notifierPushHandler
) =>
  pushAbsintheEvent(
    absintheSocket,
    request,
    notifierPushHandler,
    createAbsintheDocEvent(requestToCompat(request))
  )

const setNotifierRequestStatusSending = (absintheSocket, notifier) =>
  refreshNotifier(absintheSocket, {
    ...notifier,
    requestStatus: requestStatuses.sending
  })

const createRequestError = (message) => {
  const error = new Error(`request: ${message}`)
  // error.object = message

  return error
}

const onTimeout = (absintheSocket, notifier) =>
  notifierNotifyActive(
    notifier,
    createErrorEvent(createRequestError('timeout'))
  )

const onError = (
  absintheSocket: AbsintheSocket,
  notifier: Notifier<any, any>,
  errorMessage: string
) => abortNotifier(absintheSocket, notifier, createRequestError(errorMessage))

const getNotifierPushHandler = (onSucceed) => ({
  onError,
  onSucceed,
  onTimeout
})

function pushRequestUsing(
  absintheSocket: AbsintheSocket,
  notifier: Notifier<any, any>,
  onSucceed: NotifierPushHandler<any>
) {
  pushAbsintheDocEvent(
    absintheSocket,
    setNotifierRequestStatusSending(absintheSocket, notifier),
    getNotifierPushHandler(onSucceed)
  )
}

export { pushRequestUsing as default, onError }
