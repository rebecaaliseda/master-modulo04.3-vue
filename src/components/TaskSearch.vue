<script setup lang="ts">
import { useTaskStore } from '../stores/task.store';

const taskStore = useTaskStore();
</script>

<template>
  <input
    :value="taskStore.searchText"
    @input="taskStore.setSearchText(($event.target as HTMLInputElement).value)"
    type="text"
    placeholder="Search task..."
  />
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
input {
  width: 100%;

  font-family: inherit;
  font-size: 1rem;

  padding: 0.75rem;

  margin-bottom: 1.5rem;

  border: 1px solid $border-color;
  border-radius: 8px;
}
</style>
