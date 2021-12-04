import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Empresa from '../Empresa/Empresa';
import EmpresaEditar from '../Empresa/EmpresaEditar';
import ContaPagar from '../ContaPagar/ContaPagar'
import ContaPagarEditar from '../ContaPagar/ContaPagarEditar'

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/empresa" component={Empresa}></Route>
        <Route exact path="/empresa/:idEmpresa" component={EmpresaEditar}></Route>

        <Route exact path="/contaPagar"          component={ContaPagar}></Route>

        <Route exact path="/contaPagar/:idContaPagar" component={ContaPagarEditar}></Route>




      </Switch>

    </div>
  );
}

