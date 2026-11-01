<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from '../types/task.model';
import { useTaskStore } from '../stores/task.store';

const props = defineProps<{
  task: Task;
}>();

const taskStore = useTaskStore();

const editedText = ref('');

const startEditing = () => {
  editedText.value = props.task.text;
  props.task.editing = true;
};

const saveEdit = () => {
  taskStore.updateTask(props.task.id, editedText.value);

  props.task.editing = false;
};
</script>

<template>
  <li>
    <input type="checkbox" :checked="task.completed" @change="taskStore.toggleTask(task.id)" />

    <input v-if="task.editing" v-model="editedText" @keyup.enter="saveEdit" @blur="saveEdit" />

    <span v-else @dblclick="startEditing" :class="{ completed: task.completed }">
      {{ task.text }}
    </span>

    <button @click="taskStore.removeTask(task.id)" aria-label="Remove task">🗑️</button>
  </li>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
li {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;

  border: 1px solid #ebe6df;

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }
}
input[type='checkbox'] {
  accent-color: $primary-color;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

span {
  flex: 1;
  color: $text-color;
}

.completed {
  text-decoration: line-through;
  opacity: 0.6;
}

input[type='text'] {
  flex: 1;

  padding: 0.5rem;

  border: 1px solid #d1d5db;
  border-radius: 6px;
}

button {
  width: 45px;
  height: 45px;

  border: none;
  border-radius: 10px;

  font-size: 1.1rem;

  background-color: $danger-color;
  color: white;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: $danger-hover;
    transform: scale(1.05);
  }
}
</style>
