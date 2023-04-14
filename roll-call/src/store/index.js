// store.js
import { reactive } from "vue";

const store = reactive({
  allSchool: [],
  tableId: "",
  classScore: [],
  studentRanking:[],
  updateSchoolList(item) {
    this.allSchool.push(item);
  },
  setTableId(id) {
    this.tableId = id;
  },
  setClassScore(item) {
    this.classScore.push(item);
  },
  setStudentRanking(item){
    this.studentRanking.push(item)
  }
});

export { store };
