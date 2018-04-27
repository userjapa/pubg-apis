import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const THIS_URL = 'https://api.playbattlegrounds.com/shards/pc-sa'
const THIS_HEADERS = {
  'Accept': 'application/vnd.api+json'
}

export default new Vuex.Store({
  state: {
    credential: localStorage.getItem('credential'),
    info: {},
    user: {},
    match: {},
    error: null
  },
  getters: {
    hasCredentials ({ credential }) {
      if (credential) return true
      else return false
    },
    getCredential ({ credential }) {
      if (typeof credential === 'string') return JSON.parse(credential)
      else return credential
    },
    getInfo ({ info }) {
      console.log(info);
      return info
    },
    getUser ({ user }) {
      return user
    },
    getMatches ({ info }) {
      if (!info.relationships) return []
      else return info.relationships.matches.data
    },
    getMatch ({ match }) {
      return match
    },
    hasError ({ error }) {
      if (error) return true
      else return false
    }
  },
  mutations: {
    setCredential (state, credential) {
      state.credential = credential
      localStorage.setItem('credential', JSON.stringify(credential))
    },
    setInfo (state, info) {
      state.info = info
    },
    setUser (state, user) {
      state.user = user
    },
    setMatch (state, match) {
      state.match = match
    },
    setError (state , error) {
      if (error && error[0] && error[0].status && parseInt(error[0].status) >= 400)
        localStorage.removeItem('credential')
      console.warn(error)
      state.error = error
    }
  },
  actions: {
    async login ({ commit }, credential) {
      try {
        const headers = Object.assign({ 'Authorization': credential.api_key }, THIS_HEADERS)
        const response = await axios({
          method: 'GET',
          url: `${THIS_URL}/players?filter[playerNames]=${credential.name}`,
          headers: headers
        })
        if (response.errors) throw response
        commit('setCredential', credential)
        commit('setInfo', response.data.data[0])
        commit('setUser', response.data.data[0].attributes)
        commit('setError', null)
      } catch (error) {
        commit('setError', error)
      }
    },
    async getMatch ({ commit, getters }, id) {
      try {
        const headers = Object.assign({ 'Authorization': getters['getCredential'].api_key }, THIS_HEADERS)
        const response = await axios({
          method: 'GET',
          url: `${THIS_URL}/matches/${id}`,
          headers: headers
        })
        if (response.errors) throw response
        commit('setMatch', response.data)
        commit('setError', null)
      } catch (error) {
        commit('setError', error)
      }
    }
  }
})
