import { createStore } from 'vuex'
import { getTrendings } from '../api/rest/trendings'
import { getReadme } from '@/api/rest/readme'

export default createStore({
  state: {
    trendings: {
      data: {}
    }
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((item) => item.id)
  },
  mutations: {
    setUserData (state, payload) {
      state.trendings.data = payload
    },
    SET_README: (state, payload) => {
      state.data = state.data.map(repo => {
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
        commit('setUserData', data.items)
      } catch (error) {

      }
    },
    async fetchReadMe ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo !== undefined) return

      try {
        const { data } = await getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
