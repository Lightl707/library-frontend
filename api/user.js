import request from './request'

export const fetchUserCreate = id =>
  request
    .get(`/user/`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })

export const fetchUserAuth = id =>
  request
    .get(`/user/`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })
