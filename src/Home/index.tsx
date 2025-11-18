import { useState } from "react";
import "./styles.css";

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <div className="contain">
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
    </div>
  );
}
