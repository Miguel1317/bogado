import axios from 'axios';

const baseUrl = 'http://localhost:3001/appointments';

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
};

const create = newAppointment => {
  return axios.post(baseUrl, newAppointment).then(response => response.data);
};

export default { getAll, create };
