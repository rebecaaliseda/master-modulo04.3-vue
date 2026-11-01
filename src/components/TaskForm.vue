<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../stores/task.store';

const taskStore = useTaskStore();

const taskName = ref('');

const addTask = () => {
  const text = taskName.value.trim();

  if (!text) return;

  taskStore.addTask(text);

  taskName.value = '';
};
</script>

<template>
  <form @submit.prevent="addTask">
    <input v-model="taskName" type="text" placeholder="Write a task" />

    <button type="submit">Add</button>
  </form>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
form {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

input {
  flex: 1;

  font-family: inherit;
  font-size: 1rem;

  padding: 0.75rem;

  border: 1px solid $border-color;
  border-radius: 8px;
}

button {
  font-family: inherit;

  font-weight: 700;

  letter-spacing: 0.3px;

  border: none;
  border-radius: 10px;

  padding: 0.8rem 1.4rem;

  cursor: pointer;

  background-color: $primary-color;
  color: white;

  &:hover {
    background-color: $primary-hover;
  }
}
</style>
