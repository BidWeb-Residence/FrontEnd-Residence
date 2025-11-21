import "./styles.css";
import { FiEyeOff, FiAlertTriangle, FiGitMerge, FiClock, FiTerminal, FiDatabase, FiEdit3, FiZapOff } from "react-icons/fi";

export default function Informations() {
  return (
    <div className="contain">
      <section className="content-into-sql">
        <h1 className="title-intro">O que é SQL Injection?</h1> 
        <div className="content">
          <p className="paragraph-into">
            O SQL Injection ou Injeção de SQL é um tipo de ataque antigo, porém,
            ainda muito comum e perigoso.O SQLi é uma maneira de interferir
            consultas SQL que sua aplicação envia para o banco de dados.
            Resumindo, SQLi é uma tentativa de "enganar" o banco de dados, no
            intuito de, revelar dados que não deveria.
          </p>
        </div>
      </section>
      
      <div className="content-sections-info">
        
        <section className="content-section">
          <h1 className="title">Tipos de Injeções SQL</h1>
          <p>
            Existem diversos tipos de ataques SQL Injection, cada um com suas
            características e metodos específicos:
          </p>
          
          <ul className="atacks-list">
            <li className="list-paragraph">
              <div className="list-icon-container">
                <FiEyeOff size={24} color="#2a399b" />
              </div>
              <div>
                <strong>Injeção de SQL Cega ou Blind SQL Injection:</strong>Não há
                retorno direto de dados. O atacante infere informações por meio de
                respostas booleanas ou tempos de resposta. Tem como objetivo
                extrair dados mesmo sem mensagens de erro ou saída visível.
              </div>
            </li>
            <li className="list-paragraph">
              <div className="list-icon-container">
                <FiAlertTriangle size={24} color="#2a399b" />
              </div>
              <div>
                <strong>Injeção de Erro ou Error-based SQL Injection:</strong>
                Explora mensagens de erro detalhadas do BD para descobrir
                estrutura de tabelas, colunas e versões. Tem como objetivo mapear
                o banco de dados rapidamente.
              </div>
            </li>
            <li className="list-paragraph">
              <div className="list-icon-container">
                <FiGitMerge size={24} color="#2a399b" />
              </div>
              <div>
                <strong>Injeção de União ou Union-based SQL Injection:</strong>{" "}
                Usa UNION para combinar resultados de consultas maliciosas com a
                original, exibindo dados de outras tabelas. Tem como objetivo
                extrair dados diretamente por exemplo senhas, usuários.
              </div>
            </li>
            <li className="list-paragraph">
              <div className="list-icon-container">
                <FiClock size={24} color="#2a399b" />
              </div>
              <div>
                <strong>Injeção de Time ou Time-based SQL Injection:</strong>
                Comandos como SLEEP() ou WAITFOR introduzem atrasos condicionais ;
                o tempo de resposta indica se uma condição é verdadeira. Tem como
                objetivo extrair dados em cenários blind sem output visível.
              </div>
            </li>
            <li className="list-paragraph">
              <div className="list-icon-container">
                <FiTerminal size={24} color="#2a399b" />
              </div>
              <div>
                <strong>Injeção de Comando ou Command Injection:</strong> Após
                explorar SQLi, o atacante executa comandos do sistema (ex: via
                xp_cmdshell no SQL Server). Tem como objetivo escalar privilégios,
                acessar o servidor, comprometer o sistema.
              </div>
            </li>
          </ul>
        </section>
        
        <section className="content-section">
          <h1 className="title">Como evitar um ataque de Injeção SQL?</h1>
          
          <div className="content-avoid-atacks">
            <h2 className="sub-title">Validação de input</h2>
            <p>
              Implemente validações de todos os inputs que o usuário pode
              fornecer, você pode utilizar bibliotecas ou frameworks para ajudar
              nessa validação
            </p>
          </div>
          <div className="content-avoid-atacks">
            <h2 className="sub-title">Implementação de privilégios</h2>
            <p>
              Evite conceder permissoes de administrador ou acesso irrestrito.
            </p>
          </div>
        </section>
        
        <section className="content-section">
            <h1 className="title">Consequências de um Ataque :</h1>
            <ul className="atacks-list"> 
                <li className="list-paragraph">
                    <div className="list-icon-container">
                        <FiDatabase size={24} color="#e74c3c" /> 
                    </div>
                    <div>
                        <strong>Vazamento de Dados:</strong> Roubo de senhas, informações pessoais (PII) e dados sensíveis.
                    </div>
                </li>
                <li className="list-paragraph">
                    <div className="list-icon-container">
                        <FiEdit3 size={24} color="#f39c12" />
                    </div>
                    <div>
                        <strong>Perda de Integridade:</strong> Capacidade de alterar ou deletar dados no banco de dados, corrompendo informações.
                    </div>
                </li>
                <li className="list-paragraph">
                    <div className="list-icon-container">
                        <FiZapOff size={24} color="#c0392b" /> 
                    </div>
                    <div>
                        <strong>Negação de Serviço (DoS):</strong> O atacante pode danificar a base de dados, tornando a aplicação lenta ou inacessível.
                    </div>
                </li>
            </ul>
        </section>

      </div>
    </div>
  );
}