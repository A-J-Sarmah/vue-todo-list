<template>
  <!-- form section -->
  <section class="flex justify-center flex-col md:flex-row items-center">
    <input
      type="text"
      class="border border-black mr-3 w-64 py-1 focus:outline-none"
      placeholder="Enter a todo here"
      v-model="input"
    />
    <button
      class="
            mt-3
            md:mt-0
            px-2
            py-1
            border border-black-100
            bg-yellow-500
            text-white
            rounded
            text-md
          "
      @click="onSubmit"
    >
      Submit
    </button>
  </section>
</template>

<script>
import { v4 } from "uuid";
export default {
  name: "App",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.input !== "") {
        const newTodo = {
          id: v4(),
          todo: this.input,
          isCompleated: false,
        };
        this.input = "";
        this.$emit("add-todo", newTodo);
      }
    },
  },
};
</script>
