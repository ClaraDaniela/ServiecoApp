/*import React, { useEffect, useState } from 'react';
import { getContactos } from '../../services/contactosApi';

const ContactosList: React.FC = () => {
  const [contactos, setContactos] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchContactos = async () => {
      try {
        const data = await getContactos();
        setContactos(data); // Almacena los contctos en el estado
      } catch (error) {
        setError('No se pudieron obtener los contactos');
      }
    };

    fetchContactos();
  }, []); // Este useEffect se ejecuta una vez cuando el componente se monta

  return (
    <div>
  <h2>Lista de Contactos</h2>
  {error && <p>{error}</p>}
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Código</th>
        <th>Razón Social</th>
        <th>Descripción</th>
        <th>CUIT</th>
        <th>Percepción IIBB</th>
        <th>Tipo de Contribución</th>
        <th>Acepta FCE</th>
        <th>Orden de Compra</th>
        <th>Fecha de Alta</th>
        <th>Dirección</th>
        <th>Estado</th>
        <th>Moneda</th>
      </tr>
    </thead>
    <tbody>
      {contactos.map((contacto) => (
        <tr>
          <td>{contacto.nombre}</td>
          <td>{contacto.codigo}</td>
          <td>{contacto.razon_social}</td>
          <td>{contacto.descripcion}</td>
          <td>{contacto.CUIT}</td>
          <td>{contacto.percepcion_IIBB}</td>
          <td>{contacto.tipo_contribucion}</td>
          <td>{contacto.acepta_FCE ? "Sí" : "No"}</td>
          <td>{contacto.orden_compra ? "Sí" : "No"}</td>
          <td>{contacto.fecha_alta ?? "No disponible"}</td>
          <td>
            {cliente.Direccion.direccion}, {cliente.Direccion.localidad},{" "}
            {cliente.Direccion.provincia}, {cliente.Direccion.cp}
          </td>
          <td>{cliente.Estado_cliente.estado ?? "No disponible"}</td>
          <td>{cliente.Moneda.nombre ?? "No disponible"}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default ClientesList;*/