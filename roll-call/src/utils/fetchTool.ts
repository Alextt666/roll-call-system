import { store } from "@/store/index";
// import { ElMessage } from "element-plus";
import { fetchData,fetchRoster } from "@/api/request";

interface IAxios<D = null> {
  code?: string
  msg?: string
  rows?: Array<any>,
  data?: D
}

interface AxiosResponse extends IAxios{}

// 获取全班图标数据
async function fetchChartsData(id:string) {
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

// 获取全班花名册
async function fetchChartsAllData() {
  try {
    const tableId = store.tableId;
    if(!tableId){
      ElMessage({
      message: "Server Error! 缺少tabldId",
      type: "warning",
    });
    }
    const resData = await fetchRoster(tableId) as AxiosResponse;
    if (resData?.rows.length != 0) {
      // 存入
      resData.rows.forEach((item) => store.updateSchoolList(item));
    } else {
      ElMessage({
        message: "当前获取学校为空! 请检查TimeTableID.",
        type: "warning",
      });
    }
  } catch (error) {
    ElMessage({
      message: "Server Error! " + error,
      type: "warning",
    });
  }
}

export { fetchChartsData,fetchChartsAllData };
