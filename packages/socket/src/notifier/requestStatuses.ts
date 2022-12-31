const requestStatuses = {
  canceled: 'canceled',
  canceling: 'canceling',
  pending: 'pending',
  sent: 'sent',
  sending: 'sending'
}

type RequestStatus = $Values<typeof requestStatuses>

export default requestStatuses

export type { RequestStatus }
