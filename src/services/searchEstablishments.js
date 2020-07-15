import api from './api';

const searchEstablishments = async (page = 1, limit = 20, name = '') => {
  const response = await api.get(
    `/client/establishments?page=${page}&limit=${limit}&name=${name}`,
  );
  return response.data;
};

export default searchEstablishments;
