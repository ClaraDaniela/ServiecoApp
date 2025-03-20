import axios from 'axios';

// El url base debecoincidir con el backend
const API_URL = 'http://localhost:4000'; 

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getContactos = async () => {
  try {
    const response = await axiosInstance.get('/contactos');
    return response.data; // Devuelve los clientes obtenidos
  } catch (error) {
    console.error('Error al obtener los contactos', error);
    throw error;
  }
};

export const getContactoById = async (nombre: string, apellido: string, Planta_idPlanta: number) => {
    try {
      const response = await axiosInstance.get(`/contactos/${nombre}/${apellido}/${Planta_idPlanta}`);
      return response.data; // Devuelve el contacto
    } catch (error) {
      console.error('Error al obtener el contacto', error);
      throw error;
    }
  };
  

export const createContacto = async (contactoData: object) => {
  try {
    const response = await axiosInstance.post('/contacto', contactoData);
    return response.data; // Devuelve el contacto creado
  } catch (error) {
    console.error('Error al crear el contacto', error);
    throw error;
  }
};

export const updateContacto = async (nombre: string, apellido: string, Planta_idPlanta: number, contactoData: object) => {
  try {
    const response = await axiosInstance.put(`/contactos/${nombre}/${apellido}/${Planta_idPlanta}`, contactoData);
    return response.data; // Devuelve el contacto actualizado
  } catch (error) {
    console.error('Error al actualizar el contacto', error);
    throw error;
  }
};

export const deleteContacto = async (nombre: string, apellido: string, Planta_idPlanta: number) => {
  try {
    const response = await axiosInstance.delete(`/contactos/${nombre}/${apellido}/${Planta_idPlanta}`);
    return response.data; // Devuelve el mensaje de éxito
  } catch (error) {
    console.error('Error al eliminar el contacto', error);
    throw error;
  }
};