<script setup lang="ts">
import { useTaskStore } from '../stores/task.store';

const taskStore = useTaskStore();
</script>

<template>
  <div>
    <button @click="taskStore.completeAll()">Complete all</button>

    <button @click="taskStore.uncompleteAll()">Reset all</button>

    <button @click="taskStore.clearCompleted()">Clear completed</button>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

button {
  font-family: inherit;

  font-weight: 600;

  border: none;
  border-radius: 8px;

  padding: 0.7rem 1rem;

  cursor: pointer;

  background-color: #425066;

  color: white;

  &:hover {
    background-color: #334155;
  }
}
</style>
