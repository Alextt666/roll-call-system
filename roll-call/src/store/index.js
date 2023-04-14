// store.js
import { reactive } from "vue";

const store = reactive({
  allSchool: [],
  tableId: "",
  classScore: [],
  updateSchoolList(item) {
    this.allSchool.push(item);
  },
  setTableId(id) {
    this.tableId = id;
  },
  setClassScore(item) {
    this.classScore.push(item);
  },
});

export { store };
