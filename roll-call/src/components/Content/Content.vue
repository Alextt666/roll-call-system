<template>
  <Student
    :studentList="studentList"
    @emitStudentInfo="handleEmitStudentInfo"
  />
  <div class="footer">
    <!-- <button @click="handleAward" class="global-btn">奖杯</button> -->

    <button @click="handleRollCallAll" class="global-btn">全 班</button>
    <button @click="handleRollCall" class="global-btn">随机点名</button>
    <button class="global-btn">数据统计</button>
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
</template>
<script setup>
import Award from "@/components/Lottie/Award.vue";
import Student from "@/components/Student/Student.vue";
import RollButton from "@/components/Content/RollButton.vue";
import { ref, reactive } from "vue";
const centerDialogVisible = ref(false);
const studentDialogVisible = ref(false);
let showAward = ref(false);
let student = ref("");
let intervalId = ref(null);
let calling = ref(false);
let curStudent = reactive({});
let selectIndex = ref(999);
let tagMsg = ref("");
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
  console.log(studentDialogVisible.value);
}
// 标签发送
function handleTagClick(item) {
  handleAward();
  selectIndex.value = item;
  tagMsg.value = item;
  studentDialogVisible.value = false;
}
function studentDialogClose() {
  selectIndex.value = 999;
}

// handleTrigger
function handleTrigger() {
  centerDialogVisible.value = false;
  handleEmitStudentInfo(studentList[count]);
}
</script>
<style scoped lang="scss">
button {
  width: 8rem;
  height: 3rem;
  font-size: 1rem;
  color: $medium-gray;
  outline: none;
}

.footer {
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-45%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog-title {
  text-align: left;
  font-size: 1.2rem;
}

.dialog-content {
  width: 100%;
  height: 12rem;
  background-color: $lighter-gray;
  text-align: center;
  line-height: 12rem;
  font-size: 5rem;
  padding-left: 3px;
  letter-spacing: 15px;
}
.dialog-footer-btn {
  width: 100px;
  height: 38px;
  box-sizing: border-box;
  background-color: $btn-red;
  color: $light-color;
  text-align: center;
  font-weight: bold;
  .btn-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.dialog-footer-btn:hover {
  border: 1px solid transparent;
  box-shadow: 0 0 10px $light-gray;
}

// 标签
.dialog-info {
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: $lightest-gray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100px;
  padding-left: 20px;
  img {
    height: 100%;
    width: 64px;
  }
  .info-text {
    margin-left: 20px;
    color: $text-gray;
    .text-name {
      color: $text-dark;
      font-size: 1.2rem;
    }
  }
}
.dialog-tags {
  min-height: 12rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: min-content;
  grid-gap: 10px;
  .tag {
    border-radius: 10px;
    text-align: center;
    height: 2.5rem;
    color: $text-dark;
    line-height: 2.5rem;
    background-color: $lightest-gray;
    cursor: pointer;
  }
  .tag:hover {
    color: $light-color;
    background-color: $info-color;
  }
  .tag-active {
    color: $light-color;
    background-color: $info-color;
  }
}

.global-btn {
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  color: $light-color;
  background-color: $info-color;
  margin: 0 15px;
  font-weight: 500;
}
.global-btn:hover {
  border: none;
  box-shadow: 0 0 15px $light-gray;
}

.evaluate {
  background-color: $info-color;
  margin-left: 5px;
}
</style>
