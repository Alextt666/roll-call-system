// store.js
import { reactive } from "vue";

const store = reactive({
  allSchool: [],
  tableId:"",
  updateSchoolList(item) {
    this.allSchool.push(item)
  },
  setTableId(id){
    this.tableId = id;
  }
});

export { store };
