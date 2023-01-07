import cancel from './cancel'
import unobserve from './unobserve'

import type { AbsintheSocket, Result, Variables } from './types'
import type { Notifier, Observer } from './notifier/types'

const doUnobserveOrCancel = (absintheSocket, notifier, observer) =>
  notifier.activeObservers.length === 1
    ? cancel(absintheSocket, notifier)
    : unobserve(absintheSocket, notifier, observer)

/**
 * Cancels notifier if there are no more observers apart from the one given, or
 * detaches given observer from notifier otherwise
 *
 * @example
 * import * as withAbsintheSocket from "@absinthe/socket";
 *
 * withAbsintheSocket.unobserve(absintheSocket, notifier, observer);
 */
const unobserveOrCancel = function (
  absintheSocket: AbsintheSocket,
  notifier: Notifier<Result, Variables>,
  observer: Observer<Result, Variables>
) {
  return notifier.isActive
    ? doUnobserveOrCancel(absintheSocket, notifier, observer)
    : absintheSocket
}

export default unobserveOrCancel
