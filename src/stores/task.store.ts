import { defineStore } from 'pinia';
import type { Task } from '../types/task.model';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]') as Task[],
    filter: 'all',
    searchText: '',
  }),
  actions: {
    addTask(text: string) {
      this.tasks.push({
        id: Date.now(),
        text,
        completed: false,
      });

      this.saveTasks();
    },

    removeTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);

      this.saveTasks();
    },

    toggleTask(id: number) {
      const task = this.tasks.find((task) => task.id === id);

      if (task) {
        task.completed = !task.completed;
      }

      this.saveTasks();
    },

    setFilter(filter: string) {
      this.filter = filter;
    },

    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },

    clearCompleted() {
      this.tasks = this.tasks.filter((task) => !task.completed);

      this.saveTasks();
    },

    updateTask(id: number, text: string) {
      const task = this.tasks.find((task) => task.id === id);

      if (task) {
        task.text = text;
        this.saveTasks();
      }
    },

    completeAll() {
      this.tasks.forEach((task) => {
        task.completed = true;
      });

      this.saveTasks();
    },

    uncompleteAll() {
      this.tasks.forEach((task) => {
        task.completed = false;
      });

      this.saveTasks();
    },

    setSearchText(text: string) {
      this.searchText = text;
    },
  },
});
