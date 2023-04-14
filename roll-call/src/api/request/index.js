import request from "../common";
// 花名册
export function fetchRoster(timetableId){
    return request({
        url:`/api/classStudentByTimetableId/${timetableId}`,
        method:'get',
    })
}

// 标签
export function fetchTagList(timetableId){
    return request({
        url:`/api/studentLabel/${timetableId}`,
        method:'get',
    })
}


// 数据统计
export function fetchData(timetableId){
    return request({
        url:`/api/studentCupInfo/${timetableId}`,
        method:'get',
    })
}

// 发送奖杯
export function postAward(data){
    return request({
        url:'/api/studentCup',
        method:'post',
        data
    })
}