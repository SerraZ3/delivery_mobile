import api from './api';

const productByCategoryBest = async (page, limit, name) => {
  const response = await api.get(
    `/client/product-categories-best?page=${page}&limit=${limit}&name=${name}`,
  );
  return response.data;
};

export default productByCategoryBest;
