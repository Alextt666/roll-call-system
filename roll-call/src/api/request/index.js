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