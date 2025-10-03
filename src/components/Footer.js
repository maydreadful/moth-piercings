import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="pager-inner-content content">
        <div className="download-options">
          <p>Baixe nosso app</p>
          <div className="store-icons">
            <img src="/images/google-play-badge.png" alt="Google Play Store Badge" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="logo">
            Moth<span>Piercings</span>
          </h1>
          <p>piercing é tudo isso e mais um pouco.</p>
        </div>

        <div className="links">
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <Link to="/Cupons">Cupons</Link>
            </li>
            <li>
              <Link to="/Política de Trocas">Política de Trocas</Link>
            </li>
            <li>
              <Link to="/Pagamentos">Pagamentos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="page-inner-content">
          <hr />
          <p>Copyright &copy; 2025 MothPiercings</p>
        </div>
      </div>
    </footer>
  );
}
