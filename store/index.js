console.log(1234);
export const actions = {
    // 全局服务初始化
    nuxtServerInit(store, { req }) {
        console.log(store);
        console.log(req);
    }
  }