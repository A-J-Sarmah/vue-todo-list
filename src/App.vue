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
      console.log(todo);
      console.log(this.todos);
    },
  },
};
</script>
