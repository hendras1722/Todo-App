<script lang="ts" setup>
import Abutton from "../Atoms/Abutton.vue";
import AInput from "../Atoms/AInput.vue";
import { ref } from "vue";
import { useTodo } from "../../store/Todo";

const StateInput = ref("");
const StoreTodo = useTodo();

const addTodo = (e) => {
  e.preventDefault();
  StoreTodo.AddList({
    id: Math.random() + StoreTodo.allData.length,
    title: StateInput.value,
    status: false,
  });
  StateInput.value = "";
};
</script>

<template>
  <div style="display: flex; justify-content: center; align-items: center">
    <form @submit="addTodo">
      <AInput
        :title="'Apakah kamu lupa sesuatu...'"
        v-model="StateInput"
        style="
          height: 30px;
          min-width: 250px;
          max-width: 345px;
          margin-right: 10px;
        "
      />
      <Abutton
        :title="'ADD'"
        style="background: green; margin-top: 10px"
        :disabled="!StateInput"
      />
    </form>
  </div>
</template>
