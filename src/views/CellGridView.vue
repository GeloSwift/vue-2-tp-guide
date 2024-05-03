<template>
  <div>
    <h2>A tic-tac-toe game</h2>
    <CellGrid :style="{ width: '200px', height: '200px' }">
      <template #cell="cell">
        <span v-if="cell.player == 1">O</span>
        <span v-else-if="cell.player == 2">X</span>
      </template>
    </CellGrid>
  </div>
</template>

<script setup lang="ts">
import CellGrid from '@/components/CellGrid.vue'
</script>

<style>

</style>