// @flow

const eventNames = {
  abort: 'Abort',
  cancel: 'Cancel',
  error: 'Error',
  result: 'Result',
  start: 'Start'
}

type EventName = Array<typeof eventNames>

export default eventNames

export type { EventName }
