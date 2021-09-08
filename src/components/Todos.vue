<template>
  <!-- todo section -->
  <section class="mt-32 flex flex-col items-center">
    <!-- first todo -->
    <div
      class="flex justify-start w-4/5 mb-4"
      :key="todo.id"
      v-for="todo in todos"
    >
      <p class="md:text-2xl" :class="{ 'line-through': todo.isCompleated }">
        {{ todo.todo }}
      </p>
      <div class="ml-auto" :id="todo.id">
        <i
          class="fa fa-check mr-4 cursor-pointer"
          @click="$emit('toggle-is-compleated', todo.id)"
        ></i>
        <i
          class="fa fa-times cursor-pointer"
          @click="$emit('delete-todo', todo.id)"
        ></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  props: {
    todos: Array,
  },
};
</script>
