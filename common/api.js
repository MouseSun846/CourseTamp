export function getTrainSessionList(data, success, fail) {
    return uni.request({
      url: '/course-camp/train-session/infos',
      method: 'GET',
      data: data,
      header: {
        'Accept': 'application/json'
      },
      success: success,
      fail: fail
    });
  }
  
  // 打卡信息
  export function getDailyCheckInfo(data, success, fail) {
    return uni.request({
      url: '/course-camp/daily-check/info',
      method: 'GET',
      data: data,
      header: {
        'Accept': 'application/json'
      },
      success: success,
      fail: fail
    });
  }
  