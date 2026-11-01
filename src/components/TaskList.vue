<script setup lang="ts">
import { computed } from 'vue';
import { useTaskStore } from '../stores/task.store';
import TaskItem from './TaskItem.vue';

const taskStore = useTaskStore();

const filteredTasks = computed(() => {
  let tasks = taskStore.tasks;

  if (taskStore.filter === 'completed') {
    tasks = tasks.filter((task) => task.completed);
  }

  if (taskStore.filter === 'pending') {
    tasks = tasks.filter((task) => !task.completed);
  }

  if (taskStore.searchText.trim()) {
    tasks = tasks.filter((task) =>
      task.text.toLowerCase().includes(taskStore.searchText.toLowerCase()),
    );
  }

  return tasks;
});
</script>

<template>
  <ul>
    <TaskItem v-for="task in filteredTasks" :key="task.id" :task="task" />
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
