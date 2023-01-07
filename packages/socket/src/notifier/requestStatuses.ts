const requestStatuses = {
  canceled: 'canceled',
  canceling: 'canceling',
  pending: 'pending',
  sent: 'sent',
  sending: 'sending'
}

type RequestStatus = string

export default requestStatuses

export type { RequestStatus }
