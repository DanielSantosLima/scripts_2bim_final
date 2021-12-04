import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './MenuHorizontal.css';

export default function MenuHorizontal() {
/*
  var elemento = document.getElementById('idArea')
//  elemento.innerHTML = <Autores />
  elemento = <Autores />
*/
  return (

      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li> <Link to="/"> Início </Link> </li>
              <li> <Link to="/empresa"> Empresas   </Link> </li>
              <li> <Link to="/contaPagar"> Contas a Pagar </Link> </li>
              <li> <Link to="/livros"> Contas a Receber </Link> </li>
              <li> <Link to="/usuarios"> Funcionários </Link> </li>
              <li> <Link to="/configuracoes"> Configurações </Link> </li>
            </ul>
          </nav>
          
{/* 
          <Switch>
          <Route path="/autores" render = {() => 
          
            const = componente="<Autores/>" } >  
           
          </Route>
      
        </Switch>

*/}

        </div>

      </div>

  );
}


