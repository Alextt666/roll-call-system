import { store } from "@/store/index";
import { ElMessage } from "element-plus";
import { fetchData } from "@/api/request";

// 获取全班图标数据
async function fetchChartsData(id) {
  const res = await fetchData(id);
  try {
    if (res?.data?.classData) {
      // 班级得分
      store.setClassScore(res.data.classData);
    }
    //  个人排行
    if (res?.data?.studentRanking) {
      store.setStudentRanking(res.data.studentRanking);
    }
  } catch (error) {
    ElMessage({
      type: "warning",
      message: "DataStructure has an Error! Please Check Console! ",
    });
    console.log(error);
  }
}

export { fetchChartsData };
