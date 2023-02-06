import { createStore } from 'vuex'
import { getTrendings } from '../api/rest/trendings'
import { getReadme } from '@/api/rest/readme'
import { getUser } from '../api/rest/user'
import { starRepo, getStarredRepos } from '../api/rest/starred'
import { getIssues } from '../api/rest/issues'
import { getCode } from '../api/rest/auth'
// import * as api from '../api'

export default createStore({
  state: {
    trendings: {
      data: []
    }
  },
  getters: {
    getRepoById: (state) => (id) => state.trendings.data.find((repo) => repo.id === id),
    getStarredRepo: (state) => (id) => state.trendings.data.find((repo) => repo.id === id)
  },
  mutations: {
    SET_TRENDINGS: (state, trendings) => {
      console.log('trendings', trendings)
      state.data = trendings.map((item) => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
    },
    SET_ISSUES: (state, { id, issues }) => {
      state.data = state.trendings.data.map((repo) => {
        const editedRepo = repo
        if (repo.id === id) {
          editedRepo.issues = issues
        }
        return editedRepo
      })
    },
    SET_USER_DATA (state, payload) {
      state.trendings.data = payload
    },
    SET_README: (state, payload) => {
      state.trendings.data = state.trendings.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    },
    SET_USER: (state, payload) => {
      state.trendings.data = payload
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
        }
        return repo
      })
    },
    SET_STARRED: (state, starred) => {
      state.data = starred.map((repo) => {
        repo.following = true
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings ({ commit }) {
      try {
        const { data } = await getTrendings()
        console.log(data)
        commit('SET_USER_DATA', data.items)
      } catch (error) {

      }
    },
    async fetchReadMe ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (e) {
        console.log(e)
        throw (e)
      }
    },
    async getUser ({ commit }) {
      try {
        const { data } = await getUser()
        commit('SET_USER', data)
        console.log(data)
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async starRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      try {
        await starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            loading: true
          }
        })
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async fetchIssues ({ commit }, { id, owner, repo }) {
      commit('SET_ISSUES', {
        id,
        issues: {
          loading: true
        }
      })

      try {
        const { data } = await getIssues({ owner, repo })
        console.log(data)

        commit('SET_ISSUES', {
          id,
          issues: {
            data,
            loading: false
          }
        })
      } catch (e) {
        commit('SET_ISSUES', {
          id,
          issues: {
            loading: false,
            error: e
          }
        })
        console.log(e)
        throw e
      }
    },
    async fetchStarred ({ commit }, payload) {
      try {
        const { data } = await getStarredRepos({ limit: payload?.limit })
        console.log(data)

        commit('SET_STARRED', data)
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    getCode () {
      getCode()
    },
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
})
