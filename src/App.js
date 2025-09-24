// A CORREÇÃO PRINCIPAL ESTÁ NESTA LINHA:
import React, { useState, useEffect } from "react"; 

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductsList from "./components/ProductsList";

function App() {
  // A sintaxe correta do useState:
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('.public/db.json')
      .then((res) => res.json())
      // Lembre-se de usar os dados para atualizar o estado:
      .then((data) => setProducts(data.products)) 
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <main>
          <Header /> 
          <div className="page-inner-content">
            <div className="section-title">
              <h3>Produtos Selecionados</h3>
              <div className="underline"></div>
            </div>

            <div className="main-content">
              <ProductsList products={products} />
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

