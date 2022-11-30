import { defineStore } from "pinia";

interface Datas {
  id: number;
  title: string;
  status: boolean;
}

export const useTodo = defineStore("todo", {
  state: () => {
    return {
      allData: [] as Datas[],
    };
  },
  actions: {
    AddList(item: Datas): void {
      this.allData.push(item);
    },
    DoneList(id: number, idData: string): void {
      const indexAllData = this.allData.findIndex((item) => item.id === idData);
      this.allData[indexAllData].status = true;
    },
    DeleteList(id: number, value: string, idItem: number): void {
      if (value.includes("Done")) {
        const doneItem = this.allData
          .map((item) => {
            let obj = null;
            if (item.status) {
              obj = item;
            }
            return obj;
          })
          .filter(Boolean);
        const findIndexDone = doneItem.find((_, index) => index === id);
        this.allData.splice(
          this.allData.findIndex((item) => item.id === findIndexDone.id),
          1
        );
        return;
      }
      if (value.includes("On Progress")) {
        const progressItem = this.allData
          .map((item) => {
            let obj = null;
            if (!item.status) {
              obj = item;
            }
            return obj;
          })
          .filter(Boolean);
        const findIndexProgress = progressItem.find((_, index) => index === id);

        this.allData.splice(
          this.allData.findIndex((item) => item.id === findIndexProgress.id),
          1
        );

        return;
      }
      this.allData.splice(id, 1);
    },
  },
});
