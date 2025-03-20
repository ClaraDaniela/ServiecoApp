import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientesList from './components/Clientes/ClientesList';
import CreateCliente from './components/Clientes/CreateCliente';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Gestión de clientes</h1>
        <Routes>
          <Route path="/" element={<ClientesList />} />
          <Route path="/crear-cliente" element={<CreateCliente />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
