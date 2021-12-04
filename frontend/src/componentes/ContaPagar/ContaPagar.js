import React from "react"
import './Autores.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaContaPagar";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ContaPagar() {
  const [contaPagar, setContaPagar] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('contaPagar')
    .then(response => response.data)
      .then(response => setContaPagar(response));
  }, []
  )

  return (
    <>
        <div id="idContaPagar" className="autores">
          <div id="corpo_rel">
            <legend> Registros de Contas a Pagar Cadastradas</legend>
            {/* <Link to="/autores/0" value={'I'}>incluir Novo Autor</Link> */}

            <div>

              <Tabela
                items={contaPagar}
                chave={'/contaPagar/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default ContaPagar;

