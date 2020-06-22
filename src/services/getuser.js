import api from './api';

const getuser = async () => {
  const response = await api.get('/client/user/');
  return response.data;
};

export default getuser;
