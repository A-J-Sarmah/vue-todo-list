<template>
  <Navbar />
  <main class="mt-20">
    <Form @add-todo="onReciveTodo"></Form>
    <Todos
      :todos="todos"
      @toggle-is-compleated="toggleIsCompleated"
      @delete-todo="deleteTodo"
    />
  </main>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Form from "../src/components/Form.vue";
import Todos from "../src/components/Todos.vue";
import { getTodos } from "../src/getTodos";
export default {
  name: "App",
  data() {
    return {
      todos: getTodos(),
    };
  },
  components: {
    Navbar,
    Form,
    Todos,
  },
  methods: {
    onReciveTodo(todo) {
      this.todos = [...this.todos, todo];
      localStorage.clear();
      for (let i = 0; i < this.todos.length; i++) {
        localStorage.setItem(i, JSON.stringify(this.todos[i]));
      }
    },
    toggleIsCompleated(id) {
      localStorage.clear();
      for (let i = 0; i < this.todos.length; i++) {
        if (id == this.todos[i].id) {
          this.todos[i].isCompleated = !this.todos[i].isCompleated;
        }
        localStorage.setItem(i, JSON.stringify(this.todos[i]));
      }
    },
    deleteTodo(id) {
      localStorage.clear();
      const TODOS = [...this.todos];
      for (let i = 0; i < this.todos.length; i++) {
        if (id == this.todos[i].id) {
          TODOS.splice(i, 1);
          break;
        }
      }
      this.todos = [...TODOS];
      for (let i = 0; i < this.todos.length; i++) {
        localStorage.setItem(i, JSON.stringify(this.todos[i]));
      }
    },
  },
};
</script>
