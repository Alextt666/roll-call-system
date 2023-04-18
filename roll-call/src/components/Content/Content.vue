<template>
  <Student
    :studentList="studentList"
    @emitStudentInfo="handleEmitStudentInfo"
  />
  <div class="footer">
    <button @click="handleRollCallAll" class="global-btn">全 班</button>
    <button @click="handleRollCall" class="global-btn">随机点名</button>
    <button @click="handleData" class="global-btn">数据统计</button>
  </div>

  <Award
    @animateComplet="handleAnimateComplete"
    v-if="showAward"
    :tagMsg="tagMsg"
  />

  <!-- 随机点名 -->
  <el-dialog
    v-model="centerDialogVisible"
    width="35%"
    center
    class="my-dialog-radius"
    @close="rollcallDialogClose"
  >
    <template #header>
      <div class="dialog-title">随机点名</div>
    </template>
    <div class="dialog-content">
      {{ student }}
    </div>
    <template #footer>
      <RollButton
        :btn-text="'结 束'"
        @click="handleRollCallStop"
        v-if="calling"
      />
      <RollButton :btn-text="'开 始'" @click="handleRollCall" v-else />
      <RollButton :btn-text="'评 价'" @click="handleTrigger" />
    </template>
  </el-dialog>
  <!-- 标签 -->
  <el-dialog
    v-model="studentDialogVisible"
    width="35%"
    center
    class="my-dialog-radius"
    @close="studentDialogClose"
  >
    <template #header>
      <div class="dialog-title">学生信息</div>
    </template>
    <div class="dialog-info">
      <img :src="curStudent.avatar" alt="avator" />
      <div class="info-text">
        <div class="text-name">{{ curStudent.studentName }}</div>
        <div class="text-class">{{ msg }}</div>
      </div>
    </div>
    <div class="dialog-tags">
      <template v-for="(item, index) in tagList" :key="index">
        <div
          :class="['tag', index === selectIndex ? 'tag-active' : '']"
          @click="handleTagClick(item, 1)"
        >
          {{ item.label }}
        </div>
      </template>
    </div>
  </el-dialog>
  <!-- 全班点名 -->
  <el-dialog
    v-model="allClassDialogVisible"
    width="35%"
    center
    class="my-dialog-radius"
    @close="allClassDialogVisibleClose"
  >
    <template #header>
      <div class="dialog-title">学生信息</div>
    </template>
    <div class="dialog-info">
      <img src="@/assets/imgs/class.svg" alt="avator" />
      <div class="info-text">
        <div class="text-name">已选择全班同学</div>
        <div class="text-class">{{ msg }}</div>
      </div>
    </div>
    <div class="dialog-tags">
      <template v-for="(item, index) in tagList" :key="index">
        <div
          :class="['tag', index === selectIndex ? 'tag-active' : '']"
          @click="handleTagClick(item, 0)"
        >
          {{ item.label }}
        </div>
      </template>
    </div>
  </el-dialog>
  <!-- 数据统计 -->
  <el-dialog
    v-model="dataDialogVisible"
    width="35%"
    center
    class="my-dialog-radius"
    destroy-on-close
  >
    <template #header>
      <div class="dialog-title" style="border-bottom: 1px solid #ccc">
        数据统计
      </div>
      <div class="change-btns">
        <div class="btns-wrapper">
          <button
            :class="['change-btn', isAll ? 'change-btn-active' : '']"
            @click="handleChangeView(true)"
          >
            班级得分
          </button>
          <button
            :class="['change-btn', !isAll ? 'change-btn-active' : '']"
            @click="handleChangeView(false)"
          >
            个人得分
          </button>
        </div>
      </div>
    </template>
    <div id="data-content" :class="isAll ? '' : 'personal'">
      <AllData v-if="isAll" />
      <Personal v-else />
    </div>
  </el-dialog>
</template>
<script setup>
import Award from "@/components/Lottie/Award.vue";
import Student from "@/components/Student/Student.vue";
import Personal from "@/components/DataStruct/Person.vue";
import AllData from "@/components/DataStruct/AllData.vue";
import RollButton from "@/components/Content/RollButton.vue";
import { store } from "@/store/index";
import { ref, reactive, toRefs, toRef, watch } from "vue";
import { fetchTagList, postAward } from "@/api/request";
import { fetchChartsData } from "@/utils/fetchTool";
const centerDialogVisible = ref(false);
const studentDialogVisible = ref(false);
const allClassDialogVisible = ref(false);
const dataDialogVisible = ref(false);
let showAward = ref(false);
let student = ref("");
let intervalId = ref(null);
let calling = ref(false);
let curStudent = reactive({});
let selectIndex = ref(999);
let tagMsg = ref("");
let isAll = ref(true);
let count = 0;
const tagList = reactive([]);
let studentList = reactive([]);

const props = defineProps({
  msg: String,
  schoolIndex: String,
});

watch(
  () => props.schoolIndex,
  (newValue) => {
    changeSchoolList(newValue);
  },
  { immediate: true }
);

// 当前学校
function changeSchoolList(index) {
  studentList = [];
  store.allSchool[index].students.forEach((item) => {
    studentList.push(item);
  });
  store.updateTimetableClassroomId(index);
}

// 获取标签
async function fetchTagData(id) {
  try {
    const res = await fetchTagList(id);
    if (res?.rows) {
      res.rows.forEach((item) => {
        tagList.push(item);
      });
    }
  } catch (error) {}
}
fetchTagData(store.tableId);

// 点击学生
function handleEmitStudentInfo(item) {
  studentDialogVisible.value = true;
  curStudent = item;
}

// 奖杯方法
function handleAward() {
  showAward.value = true;
}
function handleAnimateComplete() {
  showAward.value = false;
}

// 随机点名
function handleRollCall() {
  centerDialogVisible.value = true;
  calling.value = true;
  intervalId = setInterval(function () {
    count++;
    count = count >= studentList.length ? 0 : count;
    student.value = studentList[count].studentName;
  }, 50);
}
function handleRollCallStop() {
  clearInterval(intervalId);
  calling.value = false;
}
function rollcallDialogClose() {
  clearInterval(intervalId);
  calling.value = false;
}
// 全班点名
function handleRollCallAll() {
  allClassDialogVisible.value = true;
}

// 标签发送
function handleTagClick(item, type) {
  handleAward();
  // selectIndex.value = item;
  tagMsg.value = item.label;
  studentDialogVisible.value = false;
  allClassDialogVisible.value = false;
  if (type == 0) {
    postAward({
      timetableId: store.tableId,
      timetableClassroomId: store.timetableClassroomId,
      studentId: "",
      studentLabelId: item.id,
    });
  } else {
    postAward({
      timetableId: store.tableId,
      timetableClassroomId: store.timetableClassroomId,
      studentId: curStudent.id,
      studentLabelId: item.id,
    });
  }
}
// 学生页关闭
function studentDialogClose() {
  selectIndex.value = 999;
}
// 全体页关闭
function allClassDialogVisibleClose() {
  selectIndex.value = 999;
}

// handleTrigger
function handleTrigger() {
  centerDialogVisible.value = false;
  handleEmitStudentInfo(studentList[count]);
}

// 数据统计
async function handleData() {
  await fetchChartsData(store.tableId);
  dataDialogVisible.value = true;
}
// 全部 & 个人
function handleChangeView(type) {
  isAll.value = type;
}
</script>
<style scoped lang="scss">
@import "./Content.scss";
</style>
