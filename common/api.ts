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

    // 书籍绑定
    export function bindBookInfo(data, success, fail) {
      return http<string[]>({
        url: '/course-camp/book/info',
        method: 'POST',
        data: data,
      })
    }

    // 查询书籍绑定列表
    export function getBookInfoList(data, success, fail) {
      return http<string[]>({
        url: '/course-camp/book/info',
        method: 'GET',
        data: data,
      })
    }

    // 解除书籍绑定
    export function unbindBookInfo(data, success, fail) {
      return http<string[]>({
        url: '/course-camp/book/info?userId=' + data.userId + '&bookId=' + data.bookId,
        method: 'DELETE',
        data: data,
      })
    }

    // 目标查询
    export function getUserSettingInfo(data, success, fail) {
      return http<string[]>({
        url: '/course-camp/user/setting/info',
        method: 'GET',
        data: data,
      })
    }

    // 目标设置
    export function setUserSettingInfo(data, success, fail) {
      return http<string[]>({
        url: '/course-camp/user/setting/info',
        method: 'PUT',
        data: data,
      })
    }