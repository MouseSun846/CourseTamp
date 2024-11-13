
const httpInterceptor = {
  invoke(args: UniApp.RequestOptions) {
    //请求超时时间，默认60s
    args.timeout = 10000

    const userId = uni.getStorageSync('userId')
    if(userId) {
        args.header = {
            ...args.header,
            'user-id': userId,
          }
        // 添加token
        const token = uni.getStorageSync('token')
        if (token) {
        args.header.Authorization = token
        }          
    }
  },
}
// 添加拦截器
uni.addInterceptor('request', httpInterceptor)

//定义泛型，接口返回的数据结构
interface Data<T> {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          //401错误，清理用户信息，跳转登录页，调用reject
          reject(res)
        } else {
          //通用错误，调用reject
          uni.showToast({
            title: (res.data as Data<T>).msg || '信息无效',
            icon: 'none',
          })
          reject(res)
        }
      },
      fail(err) {
        //响应失败，网络错误，调用reject
        uni.showToast({
          title: '网络错误，换个网络试试',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}


