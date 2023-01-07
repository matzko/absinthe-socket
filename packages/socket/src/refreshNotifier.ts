import notifierRefresh from './notifier/refresh'
import updateNotifiers from './updateNotifiers'

import type { AbsintheSocket, Result, Variables } from './types'
import type { Notifier } from './notifier/types'

const refreshNotifier = function (
  absintheSocket: AbsintheSocket,
  notifier: Notifier<Result, Variables>
): Notifier<Result, Variables> {
  updateNotifiers(absintheSocket, notifierRefresh(notifier))

  return notifier
}

export default refreshNotifier
