import axios from 'axios'

export const state = () => ({
  wines: [],
  specialOffers: [],
  newArrivals: []
})

export const mutations = {
  SET_WINELIST(state, wines) {
    state.wines = wines
  },
  SET_SPECIALOFFERS(state, wines) {
    state.specialOffers = wines
  },
  SET_NEWARRIVALS(state, wines) {
    state.newArrivals = wines
  }
}

export const actions = {
  async loadWineList ({commit}) {
    let response = await axios.get('/api/wines');
    commit('SET_WINELIST', response)

    let specialOfferList = response.data.filter(el => {
        return el.specialOffer == 'Y'
    })
    commit('SET_SPECIALOFFERS', specialOfferList)

    let newArrivalList = response.data.filter(el => {
        return el.newArrival == 'Y'
    })
    commit('SET_NEWARRIVALS', newArrivalList)
  }
}
