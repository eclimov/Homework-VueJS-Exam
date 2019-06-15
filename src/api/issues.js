import API from './api'

export const fetchIssues = () => API.get('/repos/vuejs/vue/issues')
export const fetchIssue = (params) => API.get(`/repos/vuejs/vue/issues/${params.id}`)
