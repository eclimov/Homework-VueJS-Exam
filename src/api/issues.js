import API from './api'

export const fetchIssues = (params) => API.get('/repos/vuejs/vue/issues/', { params })
