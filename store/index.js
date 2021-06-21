import axios from 'axios'

export const state = () => ({
  wines: [],
  specialOffers: [],
  newArrivals: [],
  showMobileMenu: false
})

export const mutations = {
  SET_WINELIST (state, wines) {
    state.wines = wines
  },
  SET_SPECIALOFFERS (state, wines) {
    state.specialOffers = wines
  },
  SET_NEWARRIVALS (state, wines) {
    state.newArrivals = wines
  },
  SET_SHOWMOBILEMENU (state, data) {
    state.showMobileMenu = data
  }
}

export const actions = {
  async loadWineList ({ commit }) {
    const response = await axios.get('/api/wines')
    commit('SET_WINELIST', response.data)

    const specialOfferList = response.data.filter((el) => {
      return el.specialOffer === 'Y'
    })
    commit('SET_SPECIALOFFERS', specialOfferList)

    const newArrivalList = response.data.filter((el) => {
      return el.newArrival === 'Y'
    })
    commit('SET_NEWARRIVALS', newArrivalList)
  }
}

export const getters = {
  showMobileMenu (state) {
    return state.showMobileMenu
  },
  wines (state) {
    return state.wines
  },
  specialOffers (state) {
    return state.specialOffers
  },
  newArrivals (state) {
    return state.newArrivals
  }
}
