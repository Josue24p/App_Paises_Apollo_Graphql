import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import client from './client';
import Dashboard from './Page/Dashboard';
import Vista1 from './Page/Vista1';
import Vista2 from './Page/Vista2';




function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/vista1' element={<Vista1 />} />
          <Route path='/vista2' element={<Vista2 />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
