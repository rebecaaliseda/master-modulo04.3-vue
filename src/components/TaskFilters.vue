<script setup lang="ts">
import { useTaskStore } from '../stores/task.store';

const taskStore = useTaskStore();
</script>

<template>
  <div>
    <button @click="taskStore.setFilter('all')">All</button>

    <button @click="taskStore.setFilter('pending')">Pending</button>

    <button @click="taskStore.setFilter('completed')">Completed</button>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

button {
  font-family: inherit;

  font-weight: 600;

  border: none;
  border-radius: 8px;

  padding: 0.6rem 1rem;

  cursor: pointer;

  background-color: #ebe6df;

  &:hover {
    background-color: #ddd5cc;
  }
}
</style>
