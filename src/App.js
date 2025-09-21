import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import { useEffect } from "react";

function App() {
  const products = [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json').then((res) => res.json())
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

            <div className="main-content"></div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
