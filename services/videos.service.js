import axios from 'axios'
import { API_URL } from '../config'

export const getVideoIndex = () => {
  return axios.get(API_URL + '/vids')
    .then(
      res => res.data,
      err => err
    )
}

export const getCommentByName = (name) => {
  return axios.get(API_URL + '/comments/' + name + '.json')
    .then(
      res => res.data,
      err => err
    )
}
