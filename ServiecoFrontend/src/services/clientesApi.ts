import axios from 'axios';

// El url base debecoincidir con el backend
const API_URL = 'http://localhost:4000'; 

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getClientes = async () => {
  try {
    const response = await axiosInstance.get('/clientes');
    return response.data; // Devuelve los clientes obtenidos
  } catch (error) {
    console.error('Error al obtener los clientes', error);
    throw error;
  }
};

export const getClienteById = async (codigo: string) => {
  try {
    const response = await axiosInstance.get(`/clientes/${codigo}`);
    return response.data; // Devuelve el cliente con ese código
  } catch (error) {
    console.error('Error al obtener el cliente', error);
    throw error;
  }
};

export const createCliente = async (clienteData: object) => {
  try {
    const response = await axiosInstance.post('/clientes', clienteData);
    return response.data; // Devuelve el cliente creado
  } catch (error) {
    console.error('Error al crear el cliente', error);
    throw error;
  }
};

export const updateCliente = async (codigo: string, clienteData: object) => {
  try {
    const response = await axiosInstance.put(`/clientes/${codigo}`, clienteData);
    return response.data; // Devuelve el cliente actualizado
  } catch (error) {
    console.error('Error al actualizar el cliente', error);
    throw error;
  }
};

export const deleteCliente = async (codigo: string) => {
  try {
    const response = await axiosInstance.delete(`/clientes/${codigo}`);
    return response.data; // Devuelve el mensaje de éxito
  } catch (error) {
    console.error('Error al eliminar el cliente', error);
    throw error;
  }
};
