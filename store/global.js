
export const state = () => ({


  // 服务端设置的全局配置
  isMobile: ''
})

export const getters = {
  isMobile: state => state.isMobile
}

export const mutations = {

  // 设置是否移动端状态
  updateMobileLayoutState(state, action) {
    state.isMobile = action
  }
}

export const actions = {
  // 获取博主资料
  getUser({ commit }) {
    return this.$axios
      .$get('/auth/admin')
      .then(response => commit('updateAdminInfo', response))
  }
}