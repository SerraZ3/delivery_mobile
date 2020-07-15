import api from './api';

const productByCategoryEstablishment = async (page, limit, name, id) => {
  const response = await api.get(
    `/client/establishment-products/${id}?page=${page}&limit=${limit}&name=${name}`,
  );
  return response.data;
};

export default productByCategoryEstablishment;
