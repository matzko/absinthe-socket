import getOperationType from '../../@jumpn/utils-graphql/src/getOperationType'

import type { GqlRequest } from '../../@jumpn/utils-graphql/src/compat/cjs/types'

import requestStatuses from './requestStatuses'

import type { Notifier } from './types'
import { Variables } from '../types'

const createUsing = (request, operationType) => ({
  operationType,
  request,
  activeObservers: [],
  canceledObservers: [],
  isActive: true,
  requestStatus: requestStatuses.pending,
  subscriptionId: undefined
})

function create(request: GqlRequest<Variables>): Notifier<any, any> {
  return createUsing(request, getOperationType(request.operation))
}

export default create
