import axios from 'axios';

export const getDataFromApi = (url) => {
  return axios.get(url)
    .then(({ data }) => data)
    .catch((error) => console.log(error))
}