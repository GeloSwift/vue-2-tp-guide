import { defineStore } from 'pinia'
import _ from 'lodash'
import type { Cell } from '@/ts/types'

export const useGameStore = defineStore('game', () => {
  const cells: Array<Cell> = initCells()

  const nextPlayer: number = 0

  function initCells() {
    const ret: Array<Cell> = []
    _.forEach(_.range(3), (r) => {
      _.forEach(_.range(3), (c) => {
        ret.push({
          row: r,
          col: c,
          player: 0,
        })
      })
    })
    return ret
  }

  return { cells, nextPlayer }
})
