import axios from 'axios';
import fetch from 'cross-fetch';

export const getDataFromApi = (url) => {
  return axios.get(url)
    .then(({ data }) => data)
    .catch((error) => console.log(error))
}

export const getDataFromApiWithFetch = (url) => {
  return fetch(url)
    .then((response) => {
     
      return response;
    })
    .catch((error) => console.log(error))
}