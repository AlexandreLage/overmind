import { tsAppIndex } from '../../templates'

export default (ts) =>
  ts
    ? [
        {
          fileName: 'overmind/state.ts',
          code: `
type State = {
  count: number
}

export const state: State = {
  count: 0
}
`,
        },
        {
          fileName: 'overmind/index.ts',
          code: tsAppIndex(
            'react',
            `
import { state } from './state'

const config = {
  state,
}
`
          ),
        },
        {
          fileName: 'index.ts',
          code: `
import { createOvermind } from 'overmind'
import { config } from './overmind'

const overmind = createOvermind(config)
`,
        },
      ]
    : [
        {
          fileName: 'overmind/index.js',
          code: `
export const config = {
  state: {
    count: 0
  }
})
`,
        },
        {
          fileName: 'index.js',
          code: `
import { createOvermind } from 'overmind'
import { config } from './overmind'

const overmind = createOvermind(config)
`,
        },
      ]
