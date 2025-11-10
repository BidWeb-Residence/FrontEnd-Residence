import React, { useState } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const [url, setUrl] = useState("");

  return (
    <div className="home-wrapper">
      <header className="site-header" role="banner">
        <div className="container">
          <h1 className="brand">Projeto de Verificação</h1>
        </div>
      </header>

      <main className="site-main" role="main">
        <div className="center-card">
          <h2 className="card-title">Verifique a segurança de um link</h2>

          <div className="input-row">
            <input
              className="url-input"
              type="text"
              placeholder="https://exemplo.com/endpoint?param=1"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              aria-label="URL para verificar"
            />
            <button
              className="check-button"
              type="button"
              onClick={() => alert(url)}
            >
              Verificar
            </button>
          </div>
        </div>
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <small>© 2025 — Projeto de Verificação</small>
        </div>
      </footer>
    </div>
  );
};

export default Home;



