/**
 * @file 标签数据状态 / ES module
 * @module store/tag
 * @author Surmon <https://github.com/surmon-china>
 */
var qs = require('qs');
export const TAG_API_PATH = '/api/defaults/index'
export const NEXT_API_PATH = '/c/next-recommend'


export const state = () => {
  return {
    fetching: false,
    data: [],
    next_data: ''
  }
}

export const mutations = {
  updateFetching(state, action) {
    state.fetching = action
  },
  updateListData(state, action) {
    state.data = action.data.cate
  },
  nextListData (state, action) {
    state.next_data = action
  }
}

export const actions = {
  fetchList({ commit }) {
    commit('updateFetching', true)
    return this.$axios.$post(TAG_API_PATH, {})
      .then(response => {
        commit('updateListData', response)
        commit('updateFetching', false)
      })
      .catch(error => {
        commit('updateFetching', false)
      })
  },
  nextList({ commit }) {
    return this.$axios.$post(NEXT_API_PATH, qs.stringify({
      c: 'jujia',
      exclude: '600497897557,547021934072,591020160371,557974348379,567987656887,567266776372,596379240043',
      type: 'top'
    }), {
      responseType: 'text',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
      .then(response => {
        commit('nextListData', response)
      })
      .catch(error => {
          console.log(error);
      })
  }
}