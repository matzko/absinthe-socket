// @flow

const absintheEventNames = {
  doc: 'doc',
  unsubscribe: 'unsubscribe'
}

type AbsintheEventName = $Values<typeof absintheEventNames>

export default absintheEventNames

export type { AbsintheEventName }
