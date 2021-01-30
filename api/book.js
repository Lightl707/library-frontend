import request from './request'

export const fetchBook = id =>
  request
    .get(`/book/${id}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })

export const fetchHarry = id =>
  request
    .get(`https://www.googleapis.com/books/v1/volumes?q=harry+potter`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })

export const fetchBookDelete = id =>
  request
    .get(`/book/${id}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })
