export const actions = {
    // 全局服务初始化
    nuxtServerInit(store, { req }) {
        const initFetchAppData = [
          store.dispatch('tag/fetchList'),
          store.dispatch('tag/nextList')
        ]
        return Promise.all(initFetchAppData)
        // return store.dispatch('tag/nextList')
    }
  }