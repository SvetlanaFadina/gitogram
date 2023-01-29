import { makeRequest } from '../requests'

export const getReadme = ({ owner, repo }) => {
  const contentHeader = 'application/vnd.github.v3.html+json'
  return makeRequest({
    url: `/repos/${owner}/${repo}/contents/}`,
    headers: {
      accept: contentHeader
    }
  })
}
