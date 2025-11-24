import { useState } from "react";
import { SpinnerCircular } from "spinners-react";
import fetchSqlMap from "../services/fetchSqlMap";
import type { ApiDataType } from "../types/ApiDataType";
import "./styles.css";

export default function Home() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataAPI, setDataAPI] = useState<ApiDataType>();

  async function VerifyVunerabily(data: string) {
    setDataAPI(undefined);
    setIsLoading(true);
    const resultData = await fetchSqlMap({ url: data });
    setDataAPI(resultData);
    setUrl("");
    setIsLoading(false);
  }

  return (
    <div className="contain">
      <main className="site-main" role="main">
        <div className="center-card">
          <div className="title-div">
            <svg
              width="32"
              height="32"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2c2.563 0 4.925.344 6.68.93.873.29 1.651.66 2.232 1.117C19.482 4.496 20 5.148 20 6v4.793a3 3 0 0 0-.435-.058l-.224-.008a3.4 3.4 0 0 0-1.341.277v-2.48a9.5 9.5 0 0 1-1.32.546c-1.755.586-4.117.93-6.68.93s-4.925-.344-6.68-.93A9.5 9.5 0 0 1 2 8.524v4.478l.002.009q.003.014.03.062c.04.067.123.17.28.296.322.258.858.543 1.64.804C5.51 14.693 7.686 15 10 15c1.953 0 3.807-.221 5.274-.602l-1.318 2.309C12.716 16.9 11.366 17 10 17c-2.46 0-4.863-.324-6.68-.93A9.5 9.5 0 0 1 2 15.523v4.479l.002.009q.003.015.03.062c.04.067.123.17.28.296.322.258.858.543 1.64.804C5.51 21.693 7.686 22 10 22q.476-.001.941-.02l-.108.192a3.4 3.4 0 0 0-.454 1.703q0 .06.004.121Q10.19 24 10 24c-2.46 0-4.863-.324-6.68-.93-.906-.302-1.686-.68-2.261-1.143-.53-.427-.997-1.022-1.053-1.775L0 20V6c0-.852.519-1.504 1.088-1.953.58-.458 1.359-.826 2.231-1.117C5.075 2.344 7.437 2 10 2m0 2c-2.408 0-4.546.327-6.048.827-.756.252-1.296.531-1.626.791a1.2 1.2 0 0 0-.29.3.3.3 0 0 0-.033.066L2 6l.003.016a.3.3 0 0 0 .032.065c.043.07.13.173.291.3.33.261.87.54 1.626.792C5.454 7.673 7.592 8 10 8s4.546-.327 6.048-.827c.756-.252 1.296-.531 1.626-.791.162-.128.248-.232.29-.3a.3.3 0 0 0 .033-.066L18 6l-.003-.016a.3.3 0 0 0-.032-.065 1.2 1.2 0 0 0-.291-.3c-.33-.261-.87-.54-1.626-.792C14.546 4.327 12.408 4 10 4"
                fill="#3164af"
              />
              <path
                d="M25.303 23.867a.4.4 0 0 0-.052-.195l-.003-.004-5.565-9.74-.002-.002a.392.392 0 0 0-.68 0l-.002.002-5.565 9.74-.002.004a.392.392 0 0 0 .341.587h11.139a.39.39 0 0 0 .39-.392m-5.949-2.439a1 1 0 0 1 0 2h-.006a1 1 0 0 1 0-2zm-1.006-1.857v-2.856a1 1 0 0 1 2 0v2.856a1 1 0 1 1-2 0m8.955 4.296a2.39 2.39 0 0 1-2.39 2.392h-11.13v-.001a2.39 2.39 0 0 1-2.084-3.586l5.564-9.736a2.39 2.39 0 0 1 4.157 0l5.565 9.74c.208.362.317.773.318 1.191"
                fill="#3164af"
              />
            </svg>
            <h1 className="card-title">Verificador SQL Injection </h1>
          </div>

          <h2 className="card-subtitle">
            O sistema irá analisar automaticamente possíveis vulnerabilidades de
            SQL Injection e exibir um relatório.
          </h2>

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
              className={`check-button ${
                isLoading ? "loading-check-button" : ""
              }`}
              type="button"
              disabled={isLoading}
              onClick={() => VerifyVunerabily(url)}
            >
              Verificar
            </button>
          </div>
        </div>

        <section className={`${dataAPI ? "result-vunerabily" : ""}`}>
          {!dataAPI ? (
            isLoading ? (
              <SpinnerCircular
                size={50}
                thickness={100}
                speed={100}
                color="#3164af"
                secondaryColor="#7474747a"
              />
            ) : (
              ""
            )
          ) : (
            <div className="contain-display-result">
              <h1 className="title-result">URL verificada:</h1>
              <p className="paragraph-api-data">{dataAPI.target_url}</p>

              <h1 className="title-result">Banco de dados detectados:</h1>
              {dataAPI.data.databases.map((dbName, index) => (
                <p key={`${index}-db`} className="db-result">
                  {dbName}
                </p>
              ))}

              <h1 className="title-result">Vulnerabilidades:</h1>

              {dataAPI.data.injection_points.map((vunerabily, index) => (
                <div key={`${index}-vunerabily`}>
                  <p key={`${index}-vunerabily-title`}>{vunerabily.title}</p>
                  <p key={`${index}-vunerabily-type`}>{vunerabily.type}</p>
                  <p key={`${index}-vunerabily-payload`}>
                    {vunerabily.payload}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
