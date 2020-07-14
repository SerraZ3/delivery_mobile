import api from './api';

const signUp = async ({email, password, password_confirmation, person}) => {
  const response = await api.post('/auth/register', {
    email,
    password,
    password_confirmation,
    person,
  });
  return response.data;
};

export default signUp;
