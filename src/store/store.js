// Imports
import Vue from 'vue'
import Vuex from 'vuex'

// Import vuex modules
import authModule from './auth'

// Use vuex
Vue.use(Vuex)

// Load vuex modules
export default new Vuex.Store({
    modules: {
        auth: authModule
    }
})
