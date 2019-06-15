import API from './api'

export const fetchIssues = (params = {}) => API.get('/repos/vuejs/vue/issues', {params})
export const fetchIssue = (params) => API.get(`/repos/vuejs/vue/issues/${params.id}`)
