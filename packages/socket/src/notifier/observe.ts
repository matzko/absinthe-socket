import { Result, Variables } from '../types'
import type { Notifier, Observer } from './types'

function observe(
  { activeObservers, ...rest }: Notifier<Result, Variables>,
  observer: Observer<Result, Variables>
) {
  return {
    ...rest,
    activeObservers: [...activeObservers, observer],
    isActive: true
  }
}

export default observe
