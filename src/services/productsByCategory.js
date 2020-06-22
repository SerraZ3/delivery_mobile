import api from './api';

const productsByCategory = async (page, limit, name) => {
  const response = await api.get(
    `/client/product-categories?page=${page}&limit=${limit}&name=${name}`,
  );
  return response.data;
};

export default productsByCategory;
