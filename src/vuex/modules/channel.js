import * as types from '../mutation-types'

const state = {
  newChannelTitle: '',
  newChannelDesc: '',
  newChannelTag: '',
  newChannelPassword: '',
  newChannel: [] // 배열로 넘겨보자
}

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

const mutations = {
  [types.SET_CHANNEL_TITLE] (state, data) {
    state.newChannelTitle = data
  },
  [types.SET_CHANNEL_DESC] (state, data) {
    state.newChannelDesc = data
  },
  [types.SET_CHANNEL_TAG] (state, data) {
    state.newChannelTag = data
  },
  [types.SET_CHANNEL_PASSWORD] (state, data) {
    state.newChannelPassword = data
  },
  [types.SET_NEW_CHANNEL] (state, data) {
    state.newChannel = data
  }
}

export default {
  state,
  mutations
}
