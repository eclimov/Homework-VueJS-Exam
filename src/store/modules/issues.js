import {
  fetchIssues, fetchIssue
} from '@/api/issues'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  actions: {
    fetch ({ commit }, params) {
      commit('mutateLoading', true)
      fetchIssues(params)
        .then(result => {
          commit('mutateList', result.data)
        })
        .catch(e => {
          commit('mutateList', [])
        })
        .finally(() => commit('mutateLoading', false))
    },
    async fetchOne ({ commit }, params) {
      commit('mutateLoading', true)
      let result = await fetchIssue(params)
      commit('mutateLoading', true)
      return result.data
    }
  },
  mutations: {
    mutateList: (state, issues) => {
      state.list = issues
    },
    mutateLoading: (state, loading) => {
      state.loading = loading
    }
  },
  getters: {
    getById: (state) => (id) => state.list.find(element => element.number === id),
    getList: (state) => state.list,
    getListPaginated: (state) => (params) => {
      return state.list.slice(params.top * (params.page - 1), params.top * params.page)
    },
    getLoading: (state) => state.loading
  }
}
