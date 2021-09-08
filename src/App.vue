<template>
  <Navbar />
  <main class="mt-20">
    <Form @add-todo="onReciveTodo"></Form>
  </main>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Form from "../src/components/Form.vue";
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
  },
  methods: {
    onReciveTodo(todo) {
      this.todos = [...this.todos, todo];
      localStorage.clear();
      for (let i = 0; i < this.todos.length; i++) {
        localStorage.setItem(i, JSON.stringify(this.todos[i]));
      }
    },
  },
};
</script>
