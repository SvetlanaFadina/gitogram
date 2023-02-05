import { makeRequest } from '../requests'

export const getStarredRepos = () => makeRequest({
  url: '/user/starred',
  method: 'get'
})

export const starRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put'
})

export const unStarRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete'
})
