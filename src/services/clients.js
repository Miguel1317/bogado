import axios from 'axios';

const baseUrl = 'http://localhost:3001/clients';

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
};

const create = newClient => {
  return axios.post(baseUrl, newClient).then(response => response.data);
};

export default { getAll, create };
