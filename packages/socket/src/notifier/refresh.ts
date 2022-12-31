import replace from '../../@jumpn/utils-array/src/replace'

import findIndex from './findIndex'

import type { Notifier } from './types'

function refresh(notifier: Notifier<any, any>) {
  return function (notifiers: Array<Notifier<any, any>>) {
    return replace(
      findIndex(notifiers, 'request', notifier.request),
      [notifier],
      notifiers
    )
  }
}

export default refresh
