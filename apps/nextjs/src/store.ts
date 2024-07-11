import { atomWithStorage } from 'jotai/utils'

import type { About, Tab } from './data'
import { aboutComponents } from './data'

const tabAtom = atomWithStorage<Tab | undefined>('tab', undefined),
  aboutAtom = atomWithStorage<About>('about', Object.keys(aboutComponents)[0] as About)

export { aboutAtom, tabAtom }
