<script lang="ts" setup>
import Abutton from "../Atoms/Abutton.vue";
import { useTodo } from "../../store/Todo";

const StoreTodo = useTodo();
const props = defineProps<{
  item: any;
  index: number;
  title?: string;
}>();

const Done = (id: number, titleItem: string): void => {
  StoreTodo.DoneList(id, titleItem);
};

const Delete = (id: number, titleItem: string, idItem: number): void => {
  StoreTodo.DeleteList(id, titleItem, idItem);
};
</script>

<template>
  <div style="width: 322px">
    <div
      style="
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      "
    >
      <div
        style="
          width: 130px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        "
        :style="{
          width: props.title === 'Done' ? '200px' : '130px',
        }"
      >
        {{ props.item.title }}
      </div>
      <Abutton
        :title="'Delete'"
        @click="Delete(props.index, props.title, props.item.id)"
        style="margin-right: 5px; background: #d10000"
      />
      <Abutton
        v-if="props.title.includes('Progress') || props.title.includes('All')"
        :style="{
          background: props.item.status ? 'white' : 'green',
          color: props.item.status ? 'green' : 'white',
        }"
        :title="props.item.status ? '✓ ' : 'Done'"
        @click="Done(props.index, props.item.id)"
        :disabled="props.item.status"
      />
    </div>
  </div>
</template>
