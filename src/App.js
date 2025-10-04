import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductsList from "./components/ProductsList";
import ExclusiveSection from "./components/ExclusiveSection";
import ProductsPage from "./components/pages/ProductsPage";
import SidebarCart from "./components/SidebarCart";
import HomePage from "./components/pages/HomePage";

function App() {
  // A sintaxe correta do useState, agora consistente com o resto do código:
  const [selectedProducts, setProducts] = useState([]);
  const [showSidebarCart, setShowSidebarCart] = useState(false);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      // Agora 'setProducts' existe e vai atualizar o estado 'selectedProducts':
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar
          selectedProducts={selectedProducts}
          setShowSidebarCart={setShowSidebarCart}
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage 
                products={selectedProducts} // <-- AJUSTADO
                setShowSidebarCart={setShowSidebarCart}
                selectedProducts={selectedProducts}
              />}
            />
          </Routes>
          <Header />
          <div className="page-inner-content">
            <div className="section-title">
              <h3>Produtos Selecionados</h3>
              <div className="underline"></div>
            </div>

            <div className="main-content">
              {/* Passando a lista de produtos correta para o componente */}
              <ProductsList products={selectedProducts} /> {/* <-- AJUSTADO */}
            </div>
            
          </div>
        </main>
        <ExclusiveSection />
      </div>
    </Router>
  );
}

export default App;