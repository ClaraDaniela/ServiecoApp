import React, { useState } from 'react';
import { createCliente } from '../../services/clientesApi';

const CreateCliente: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const clienteData = { nombre, email, direccion };

    try {
      const newCliente = await createCliente(clienteData);
      alert('Cliente creado con éxito');
      // Puedes hacer algo con el cliente recién creado, como redirigir a otra página
    } catch (error) {
      alert('Error al crear el cliente');
    }
  };

  return (
    <div>
      <h2>Crear Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Dirección:
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Crear Cliente</button>
      </form>
    </div>
  );
};

export default CreateCliente;
