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
      <img
        src="@/assets/imgs/boy.svg"
        alt="avator"
        v-if="curStudent.sex == 0"
      />
      <img src="@/assets/imgs/boy.svg" alt="avator" v-else />
      <div class="info-text">
        <div class="text-name">{{ curStudent.name }}</div>
        <div class="text-class">{{ msg }}</div>
      </div>
    </div>
    <div class="dialog-tags">
      <template v-for="(item, index) in 6" :key="index">
        <div
          :class="['tag', index === selectIndex ? 'tag-active' : '']"
          @click="handleTagClick(item)"
        >
          11
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
      <template v-for="(item, index) in 6" :key="index">
        <div
          :class="['tag', index === selectIndex ? 'tag-active' : '']"
          @click="handleTagClick(item)"
        >
          11
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
  >
    <template #header>
      <div class="dialog-title" style="border-bottom: 1px solid #ccc">
        数据统计
      </div>
      <div class="change-btns">
        <div class="btns-wrapper">
          <button :class="['change-btn',isAll?'change-btn-active':'']" @click="handleChangeView(true)">
            班级得分
          </button>
          <button :class="['change-btn',!isAll?'change-btn-active':'']" @click="handleChangeView(false)">
            个人得分
          </button>
        </div>
      </div>
    </template>
    <div id="data-content">
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
import { ref, reactive } from "vue";
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

const props = defineProps({
  msg: String,
});

const studentList = reactive([
  { name: "王大炮", sex: 0 },
  { name: "张根硕", sex: 0 },
  { name: "李立柱", sex: 1 },
  { name: "周答熊", sex: 1 },
  { name: "林铁蛋", sex: 0 },
  { name: "金铁锤", sex: 1 },
  { name: "朱艺枝", sex: 1 },
  { name: "马史", sex: 0 },
  { name: "杨奋", sex: 0 },
  { name: "王大炮", sex: 0 },
  { name: "张根硕", sex: 0 },
  { name: "李立柱", sex: 1 },
  { name: "周答熊", sex: 1 },
  { name: "林铁蛋", sex: 0 },
  { name: "金铁锤", sex: 1 },
  { name: "朱艺枝", sex: 1 },
  { name: "马史", sex: 0 },
  { name: "杨奋", sex: 0 },
  { name: "王大炮", sex: 0 },
  { name: "张根硕", sex: 0 },
  { name: "李立柱", sex: 1 },
  { name: "周答熊", sex: 1 },
  { name: "林铁蛋", sex: 0 },
  { name: "金铁锤", sex: 1 },
  { name: "朱艺枝", sex: 1 },
  { name: "马史", sex: 0 },
  { name: "杨奋", sex: 0 },
]);

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
    student.value = studentList[count].name;
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
function handleTagClick(item) {
  handleAward();
  selectIndex.value = item;
  tagMsg.value = item;
  studentDialogVisible.value = false;
  allClassDialogVisible.value = false;
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
function handleData() {
  dataDialogVisible.value = true;
}
// 全部 & 个人
function handleChangeView(type) {
  isAll.value = type;
}
</script>
<style scoped lang="scss">
@import './Content.scss';
</style>
