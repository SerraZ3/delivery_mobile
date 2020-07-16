import api from './api';

const resetPassword = async (email) => {
  const response = await api.post('/auth/reset-password', {email});
  return response.data;
};

export default resetPassword;
