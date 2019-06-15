import {
  fetchIssues
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
        .finally(() => commit('mutateLoading', false))
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
    getLoading: (state) => state.loading
  }
}
