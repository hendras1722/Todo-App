<script lang="ts" setup>
import MList from "../Molecules/MList.vue";
import MInputTodo from "../Molecules/MInputTodo.vue";
import Abutton from "../Atoms/Abutton.vue";

import { useTodo } from "../../store/Todo";
import { ref } from "vue";
const StoreTodo = useTodo();
const tabList = ref(["All", "List"]);
const tabCount = ref(0);

const handleTab = (e) => {
  tabCount.value = e;
};
</script>

<template>
  <div>
    <h1>Todo APP</h1>
    <MInputTodo />
    <div style="display: flex; overflow: auto; justify-content: center">
      <Abutton
        v-for="(item, index) in tabList"
        :key="index"
        @click="handleTab(index)"
        :title="item"
        style="
          background: white;
          color: black;
          width: 200px;
          border: 1px solid black;

          margin-left: 5px;
          margin-top: 10px;
        "
      />
    </div>

    <div
      style="display: flex; justify-content: space-around"
      v-if="tabCount === 0"
    >
      <MList
        :title="'All Items'"
        :list="StoreTodo.allData"
        style="margin-top: 10px"
      />
    </div>

    <div
      style="display: flex; justify-content: space-between; flex-wrap: wrap"
      v-else
    >
      <MList
        :title="'On Progress'"
        :list="StoreTodo.allData"
        style="margin-top: 10px; margin-right: 12px"
      />
      <MList
        :title="'Done'"
        :list="StoreTodo.allData"
        style="margin-top: 10px"
      />
    </div>
    <div><small>Powered By Muh Syahendra A</small></div>
  </div>
</template>

<style scoped></style>
