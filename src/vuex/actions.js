import * as types from './mutation-types'

export const setChannelTitle = ({ commit }, data) => {
  // mutation type에 정해놓은걸로 정의
  commit(types.SET_CHANNEL_TITLE, data)
}

export const setChannelDesc = ({ commit }, data) => {
  commit(types.SET_CHANNEL_DESC, data)
}

export const setChannelTag = ({ commit }, data) => {
  commit(types.SET_CHANNEL_TAG, data)
}

export const setChannelPassword = ({ commit }, data) => {
  commit(types.SET_CHANNEL_PASSWORD, data)
}
