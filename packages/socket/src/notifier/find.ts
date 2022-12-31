import hasIn from '../../@jumpn/utils-composite/src/hasIn'

import type { Notifier } from './types'

function find(notifiers: Array<Notifier<any, any>>, key: string, value: any) {
  return notifiers.find(hasIn([key], value))
}

export default find
