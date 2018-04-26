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
    setCredential (state, credential) {
      state.credential = credential
      localStorage.setItem('credential', JSON.stringify(credential))
    },
    getCredential ({ credential }) {
      return JSON.parse(credential)
    },
    getInfo ({ info }) {
      return info
    },
    getUser ({ user }) {
      return user
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
        if (response.errors) throw response.errors
        commit('setInfo', response.data)
        commit('setError', null)
      } catch (error) {
        console.warn(error);
        commit('setError', error)
      }
    }
  }
})
