import http from 'axios'

http.defaults.baseURL = 'http://tech.cdinit.com:3000/'

export const getNews = ({ commit, state }) => {
  return http.post('posts').then((response) => {
    if (response.statusText === 'OK') {
      commit('NEWS_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
