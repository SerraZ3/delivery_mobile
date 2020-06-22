import api from './api';

const productsById = async (productsId) => {
  const response = await api.get(`/client/products-by-id`, {
    params: {products: productsId},
  });
  return response.data;
};

export default productsById;
