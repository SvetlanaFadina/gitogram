import { createStore } from 'vuex'
import { getTrendings } from '../api/rest/trendings'
import { getReadme } from '@/api/rest/readme'

export default createStore({
  state: {
    trendings: {
      data: []
    }
  },
  getters: {
    getRepoById: (state) => (id) => state.trendings.data.find((repo) => repo.id === id)
  },
  mutations: {
    setUserData (state, payload) {
      state.trendings.data = payload
    },
    SET_README: (state, payload) => {
      state.trendings.data = state.trendings.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }

  },
  actions: {
    async fetchTrendings ({ commit }) {
      try {
        const { data } = await getTrendings()
        console.log(data)
        commit('setUserData', data.items)
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
    }
  }
})
