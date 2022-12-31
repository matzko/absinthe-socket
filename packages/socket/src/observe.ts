import notifierObserve from './notifier/observe'
import refreshNotifier from './refreshNotifier'

import type { AbsintheSocket, Result, Variables } from './types'
import type { Notifier, Observer } from './notifier/types'

/**
 * Observes given notifier using the provided observer
 *
 * @example
 * import * as withAbsintheSocket from "@absinthe/socket"
 *
 * const logEvent = eventName => (...args) => console.log(eventName, ...args);
 *
 * const updatedNotifier = withAbsintheSocket.observe(absintheSocket, notifier, {
 *   onAbort: logEvent("abort"),
 *   onError: logEvent("error"),
 *   onStart: logEvent("open"),
 *   onResult: logEvent("result")
 * });
 */
function observe(
  absintheSocket: AbsintheSocket,
  notifier: Notifier<Result, Variables>,
  observer: Observer<Result, Variables>
) {
  return refreshNotifier(absintheSocket, notifierObserve(notifier, observer))
}

export default observe
