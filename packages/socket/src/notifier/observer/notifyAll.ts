// @flow

import { Result, Variables } from '../../types'
import type { Event, Observer } from '../types'

const getNotifier = function (handlerName: string, payload) {
  return function (observer) {
    observer[handlerName] && observer[handlerName](payload)
  }
}

const getHandlerName = ({ name }) => `on${name}`

const notifyAll = function (
  observers: Array<Observer<Result, Variables>>,
  event: Event
) {
  return observers.forEach(getNotifier(getHandlerName(event), event.payload))
}

export default notifyAll
