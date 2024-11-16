import { http } from '@/common/http.ts'

// code换token
export function codeToToken(data) {
  return http<string[]>({
    url: '/doc-system/vuepress/code/auth',
    method: 'GET',
    data: data,
  })
}

// 获取训练营期数
export function getTrainSessionList(data, success, fail) {
    return http<string[]>({
      url: '/course-camp/train-session/infos',
      method: 'GET',
      data: data,
    })
  }
  
  // 打卡信息
  export function getDailyCheckInfo(data, success, fail) {
    return http<string[]>({
      url: '/course-camp/daily-check/info',
      method: 'GET',
      data: data,
    })
  }
  

export function getLevelList(data, success, fail) {
    return http<string[]>({
      url: '/course-camp/level/info',
      method: 'GET',
      data: data,
    })
  }