<script setup lang="ts">
import TaskForm from './components/TaskForm.vue';
import TaskFilters from './components/TaskFilters.vue';
import TaskActions from './components/TaskActions.vue';
import TaskList from './components/TaskList.vue';
import TaskSearch from './components/TaskSearch.vue';
</script>

<template>
  <main class="container">
    <div class="card">
      <h1>📝 My ToDo App</h1>

      <TaskForm />

      <TaskSearch />

      <TaskFilters />

      <TaskActions />

      <TaskList />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use './assets/styles/variables' as *;

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.card {
  background: $card-background;

  border-radius: 20px;

  border: 1px solid $border-color;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

  padding: 2.5rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;

  color: $title-color;

  font-size: 3rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .card {
    padding: 1rem;
  }
}
</style>
