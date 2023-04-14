// store.js
import { reactive } from "vue";

const store = reactive({
  // 全部学校
  allSchool: [],
  // tableId
  tableId: "",
  // classroomID,
  timetableClassroomId:'',
  classScore: [],
  studentRanking:[],
  updateSchoolList(item) {
    this.allSchool.push(item);
  },
  updateTimetableClassroomId(index){
    this.timetableClassroomId = '';
    this.timetableClassroomId = this.allSchool[index].timetableClassroomId;
  },
  setTableId(id) {
    this.tableId = id;
  },
  setClassScore(arr) {
    this.classScore = [];
    arr.forEach(item => {
      this.classScore.push(item);
    });
  },
  setStudentRanking(arr){
    this.studentRanking = [];
    arr.forEach(item => {
      this.studentRanking.push(item);
    });
  }
});

export { store };
