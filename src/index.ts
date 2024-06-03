import './style.css'

import { getData } from './helpers'
import { go } from './scenes'
import { Data } from './types'

const level =
  Number(
    new URLSearchParams(location.search).get('level') || getData(Data.level),
  ) || 0

go(level)
