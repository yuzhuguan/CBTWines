import axios from 'axios'

export const state = () => ({
    wines: []
})

export const mutations = {
    SET_WINELIST (state, wines) {
        state.wines = wines
    }
}

export const actions = {
    async loadWineList({commit}) {
        let response = await axios.get('/api/wines');
        commit('SET_WINELIST', response)
    }
}