<script lang="ts" setup>
import { computed, ref } from "@vue/reactivity";
import MListItem from "../Molecules/MListItem.vue";
import Abutton from "../Atoms/Abutton.vue";
import { onMounted } from "vue";

interface Datas {
  id: number;
  title: string;
  status: boolean;
}

const props = defineProps<{
  title: string;
  list: Datas[];
}>();

interface Datas {
  id: number;
  title: string;
  status: boolean;
}

const typeFilter = ref("");
const computedDataList = computed(() => {
  const filterStatus = {
    progress: false,
    success: true,
  };

  if (["all", ""].includes(typeFilter.value)) {
    return props.list;
  }
  return props.list.filter(
    (list) => list.status === filterStatus[typeFilter.value]
  );
});

onMounted(() => {
  if (props.title.toLowerCase().includes("progress")) {
    typeFilter.value = "progress";
  }

  if (props.title.toLowerCase().includes("done")) {
    typeFilter.value = "success";
  }
});

const handleFilter = (type: "all" | "progress" | "success") => {
  typeFilter.value = type;
};
</script>

<template>
  <div
    style="
      border: 1px solid black;
      padding: 15px;
      border-radius: 15px;
      width: 322px;
      height: 400px;
    "
  >
    <div style="font-weight: bold">
      {{ props.title }}
    </div>
    <hr />
    <div v-if="props.title === 'All Items'">
      <Abutton
        title="All"
        style="
          background-color: transparent;
          border: 1px solid blue;
          color: blue;
        "
        @click="handleFilter('all')"
      />
      <Abutton
        title="Success"
        style="
          background-color: transparent;
          border: 1px solid green;
          color: green;
          margin-left: 3px;
        "
        @click="handleFilter('success')"
      />
      <Abutton
        title="Progress"
        style="
          background-color: transparent;
          border: 1px solid #d10000;
          color: #d10000;
          margin-left: 3px;
        "
        @click="handleFilter('progress')"
      />
    </div>
    <div
      style="overflow: auto; margin-top: 10px"
      :style="{ maxHeight: props.title === 'All Items' ? '310px' : '360px' }"
    >
      <MListItem
        v-for="(item, index) in computedDataList"
        :key="index"
        :item="item"
        :index="index"
        :title="props.title"
      />
    </div>
  </div>
</template>
