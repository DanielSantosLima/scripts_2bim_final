import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function TabelaContaPagar(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
      

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.tpg_codigo}>
          <td> {item.tpg_codigo} </td>
          <td> {item.tpg_descricao} </td>
          <td> {item.tpg_tipo} </td>
          <td> {item.tpg_valor} </td>
          <td> {item.tpg_vencimento} </td>
          <td> {item.emp_codigo} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.tpg_codigo} > Editar </a></td>
          {/* <td id="ativar"> <a className="btn btn-danger btn-block" href={props.chave + item.tpg_codigo} > Inativar </a></td>
          <td> <Link to={props.chave + item.tpg_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

          <td> <i className="bi bi-trash"></i> </td> */}
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Descrição </th>
            <th scope="col"> Tipo </th>
            <th scope="col"> Valor </th>
            <th scope="col"> Vencimento </th>
            <th scope="col"> Código Empresa </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Nova Conta a Pagar</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}