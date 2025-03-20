import React, { useEffect, useState } from 'react';
import { getClientes } from '../../services/clientesApi';

const ClientesList: React.FC = () => {
  const [clientes, setClientes] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await getClientes();
        setClientes(data); // Almacena los clientes en el estado
      } catch (error) {
        setError('No se pudieron obtener los clientes');
      }
    };

    fetchClientes();
  }, []); // Este useEffect se ejecuta una vez cuando el componente se monta

  return (
    <div>
      <h2>Lista de Clientes</h2>
      {error && <p>{error}</p>}
      <ul>
        {clientes.map((cliente) => (
          <li>
               <h3>{cliente.nombre}</h3>
               <p><strong>Código:</strong> {cliente.codigo}</p>
               <p><strong>Razón social:</strong> {cliente.razon_social}</p>
               <p><strong>Descripción:</strong> {cliente.descripcion}</p>
               <p><strong>CUIT:</strong> {cliente.CUIT}</p>
               <p><strong>Percepción IIBB:</strong> {cliente.percepcion_IIBB}</p>
               <p><strong>Tipo de contribución:</strong> {cliente.tipo_contribucion}</p>
               <p><strong>Acepta FCE:</strong>{cliente.acepta_FCE ? "Sí" : "No"}</p> 
               <p><strong>Orden de compra:</strong> {cliente.orden_compra ? "Sí" : "No"}</p>  
               <p><strong>Fecha de alta:</strong> {cliente.fecha_alta ?? "No disponible"}</p>   
               <p><strong>Dirección:</strong> 
                  {cliente.Direccion.direccion}, {cliente.Direccion.localidad}, {cliente.Direccion.provincia}, {cliente.Direccion.cp}           
                </p>  
                <p><strong>Estado:</strong> {cliente.Estado_cliente.estado ?? "No disponible"}</p>  
                <p><strong>Moneda:</strong> {cliente.Moneda.nombre ?? "No disponible"}</p>    
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientesList;
