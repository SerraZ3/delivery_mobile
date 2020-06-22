import api from './api';

const showProduct = async (id) => {
  const response = await api.get(`/client/products/${id}`);
  return response.data;
};

export default showProduct;
