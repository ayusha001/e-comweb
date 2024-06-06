import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './componets/Product';
import { Route, Routes } from 'react-router-dom';
import Viewcart from './componets/Viewcart';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Viewcart />} />
      </Routes>
    </div>
  )
}

export default App