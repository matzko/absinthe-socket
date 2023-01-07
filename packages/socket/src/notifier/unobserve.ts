import { remove as arrayRemove } from '../../@jumpn/utils-array/src/remove'
import { Result, Variables } from '../types'

import type { Notifier, Observer } from './types'

const removeObserver = (observers, observer) =>
  arrayRemove(observers.indexOf(observer), 1, observers)

const unobserve = function (
  { activeObservers, ...rest }: Notifier<Result, Variables>,
  observer: Observer<Result, Variables>
) {
  return {
    ...rest,
    activeObservers: removeObserver(activeObservers, observer)
  }
}

export default unobserve
