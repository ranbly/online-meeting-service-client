/* eslint-disable import/prefer-default-export */
// 가져올 값들을 정의
export const getChannelTitle = state => state.channel.newChannelTitle
export const getChannelDesc = state => state.channel.newChannelDesc
export const getChannelTag = state => state.channel.newChannelTag
export const getChannelPassword = state => state.channel.newChannelPassword

// 배열로 넘기는 데이터
export const getnewChannel = state => state.channel.newChannel
