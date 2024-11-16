import axios from 'axios';

const baseUrl = 'http://localhost:3001/dogs';

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
};

const create = newDog => {
  return axios.post(baseUrl, newDog).then(response => response.data);
};

export default { getAll, create };
