import questionImagefrom from "../assets/images/questionImage.png";
import "./styles.css";

export default function Informations() {
  return (
    <div className="contain">
      <section className="introductionSQLInjection">
        <h1 className="title">O que é SQL Injection?</h1>
        <div className="content">
          <p>
            O SQL Injection ou Injeção de SQL é um tipo de ataque antigo, porém,
            ainda muito comum e perigoso.O SQLi é uma maneira de interferir
            consultas SQL que sua aplicação envia para o banco de dados.
            Resumindo, SQLi é uma tentativa de "enganar" o banco de dados, no
            intuito de, revelar dados que não deveria.
          </p>
          <div className="illustrationBox">
            <img src={questionImagefrom} className="image" />
            <a href="https://storyset.com/people">
              People illustrations by Storyset
            </a>
          </div>
        </div>
      </section>
      <section className="introductionSQLInjection">
        <h1 className="title">Tipos de Injeções SQL</h1>
        <p>
          Existem diversos tipos de ataques SQL Injection, cada um com suas
          características e metodos específicos:
        </p>
        <ul>
          <li>
            <strong>Injeção de SQL Cega ou Blind SQL Injection:</strong>Não há
            retorno direto de dados. O atacante infere informações por meio de
            respostas booleanas ou tempos de resposta. Tem como objetivo extrair
            dados mesmo sem mensagens de erro ou saída visível.
          </li>
          <li>
            <strong>Injeção de Erro ouError-based SQL Injection:</strong>
            Explora mensagens de erro detalhadas do BD para descobrir estrutura
            de tabelas, colunas e versões. Tem como objetivo mapear o banco de
            dados rapidamente.
          </li>
          <li>
            <strong>Injeção de União ou Union-based SQL Injection:</strong> Usa
            UNION para combinar resultados de consultas maliciosas com a
            original, exibindo dados de outras tabelas. Tem como objetivo
            extrair dados diretamente por exemplo senhas, usuários.
          </li>
          <li>
            <strong>Injeção de Time ou Time-based SQL Injection:</strong>
            Comandos como SLEEP() ou WAITFOR introduzem atrasos condicionais ; o
            tempo de resposta indica se uma condição é verdadeira. Tem como
            objetivo extrair dados em cenários blind sem output visível.
          </li>
          <li>
            <strong>Injeção de Comando ou Command Injection:</strong> Após
            explorar SQLi, o atacante executa comandos do sistema (ex: via
            xp_cmdshell no SQL Server). Tem como objetivo escalar privilégios,
            acessar o servidor, comprometer o sistema.
          </li>
        </ul>
      </section>
      <section className="introductionSQLInjection">
        <h1 className="title">Como evitar um ataque de Injeção SQL?</h1>
        <div className="content">
          <h2>Validação de input</h2>
          <p>
            Implemente validações de todos os inputs que o usuário pode
            fornecer, você pode utilizar bibliotecas ou frameworks para ajudar
            nessa validação
          </p>
        </div>
        <div className="content">
          <h2>Implementação de privilégios</h2>
          <p>
            Evite conceder permissoes de administrador ou acesso irrestrito.
          </p>
        </div>
      </section>
    </div>
  );
}
