import React from "react"
import './Autores.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaEmpresa";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Empresa() {
  const [empresa, setEmpresa] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('empresa')
    .then(response => response.data)
      .then(response => setEmpresa(response));
  }, []
  )

  return (
    <>
        <div id="idEmpresa" className="autores">
          <div id="corpo_rel">
            <legend> Registros de Empresas Cadastradas</legend>
            {/* <Link to="/autores/0" value={'I'}>incluir Novo Autor</Link> */}

            <div>

              <Tabela
                items={empresa}
                chave={'/empresa/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Empresa;

