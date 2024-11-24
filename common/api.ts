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
  
  // 获取关卡列表
  export function getLevelList(data, success, fail) {
      return http<string[]>({
        url: '/course-camp/level/info',
        method: 'GET',
        data: data,
      })
    }

  // 获取关卡详情
  export function getLevelDetail(data, success, fail) {
    return http<string[]>({
      url: '/course-camp/level-detail/info',
      method: 'GET',
      data: data,
    })
  }

    // 更新关卡详情
    export function updateLevelDetail(data, success, fail) {
      return http<string[]>({
        url: '/course-camp/level-detail/info',
        method: 'PUT',
        data: data,
      })
    }

    // 获取关卡目录
    export function getLevelCatalog(data, success, fail) {
      return http<string[]>({
        url: '/course-camp/toc/info',
        method: 'GET',
        data: data,
      })
    }