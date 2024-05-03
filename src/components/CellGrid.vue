<template>
  <div class="cell-container">
    <div v-for="cell in cells" :key="(cell.row, cell.col)" class="cell" @click="play(cell)">
      <slot name="cell" v-bind="cell"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import type { Cell } from '@/ts/types'
import { ref } from 'vue'
import { useGameStore } from '@/stores/game'
import { onBeforeRouteLeave } from 'vue-router'

const store = useGameStore()

const cells = ref(store.cells)

const nextPlayer = ref(store.nextPlayer)

onBeforeRouteLeave((from, to) => {
  if (from.name == 'cell-grid') {
    store.cells = cells.value
    store.nextPlayer = nextPlayer.value
  }
})

function play(cell: Cell) {
  if (cell.player != 0) {
    return
  }
  cell.player = nextPlayer.value
  if (nextPlayer.value == 1) {
    nextPlayer.value = 2
  } else {
    nextPlayer.value = 1
  }
}
</script>

<style>
.cell-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px;
}
</style> 