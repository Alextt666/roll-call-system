import request from "../common";

// 获取上课链接
export function fetchClassUrl(timetableId){
    
    return request({
        url:`api/entry/${timetableId}`,
        method:'get',
    })
}
