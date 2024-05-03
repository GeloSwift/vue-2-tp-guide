<template>
  <div>
    <h2>A tic-tac-toe game</h2>
    <CellGrid :style="{ width: '200px', height: '200px' }">
      <template #cell="cell">
        <span v-if="cell.player == 1">O</span>
        <span v-else-if="cell.player == 2">X</span>
      </template>
    </CellGrid>
    {{ players }}
  </div>
</template>

<script setup lang="ts">
import CellGrid from '@/components/CellGrid.vue'
import { ref, type Ref } from 'vue'

const players: Ref<
  Array<{
    username: string
  }>
> = ref([])

fetch('https://flopedt.iut-blagnac.fr/fr/api/user/tutor/username/?dept=INFO')
  .then((response) => {
    return response.json()
  })
  .then(
    (
      response: Array<{
        username: string
      }>
    ) => {
      players.value = response
    }
  )
  .catch((error) => {
    console.log(error)
  })
</script>

<style>

</style>