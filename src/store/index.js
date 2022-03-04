import Vue from 'vue'
import Vuex from 'vuex'
import VueGapi from 'vue-gapi'

const config = {
  apiKey: 'AIzaSyCT01UTejVRp8rRdyPS_o1OIMyubdwgNRM',
  clientId: 'search-api-329318.apps.googleusercontent.com',
  discoveryDocs: ['https://places.googleapis.com/$discovery/rest'],
  scope: 'https://www.googleapis.com/auth/places',
}
Vue.use(Vuex)
Vue.use(VueGapi, config)
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
