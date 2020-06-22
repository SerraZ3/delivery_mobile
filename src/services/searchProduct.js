import api from './api';

const searchProduct = async (page, limit, name) => {
  const response = await api.get(
    `/client/products?page=${page}&limit=${limit}&name=${name}`,
  );
  return response.data;
};

export default searchProduct;
