import request from "../common";
// 花名册
export function fetchRoster(timetableId){
    return request({
        url:`/api/classStudentByTimetableId/${timetableId}`,
        method:'get',
    })
}

// 标签
export function fetTagList(timetableId){
    return request({
        url:`/api/studentLabel/${timetableId}`,
        method:'get',
    })
}