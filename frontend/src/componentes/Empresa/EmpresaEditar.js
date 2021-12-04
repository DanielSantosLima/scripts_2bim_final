import React from "react"
import './AutoresEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function EmpresaEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    //    const [autor, setAutor] = useState([]);

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [fantasia, setFantasia] = useState('');
    // const [apelido, setApelido] = useState('');
    // const [sexo, setSexo] = useState('');
    const [telefone, setTelefone] = useState('');
    const [fundacao, setFundacao] = useState('');

    const [checked, setChecked] = useState(false);
    //    const [nomePag, setNomePag] = useState(false);

    const { idEmpresa } = useParams();

    function IfCrud() {
        //        let nomeCampo = '';
        console.log('Id Empresa: ' + idEmpresa + ' - ' + idBoolean)
        if (idEmpresa === 0) {
            //            nomeCampo = 'Inclusão de Autor';
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Autor';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getEmpresa() {
            console.log('Empresa: ' + idEmpresa + ' - ' + idBoolean)
            if (idEmpresa == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/empresa/' + idEmpresa);
                console.log(data)

                setCodigo(data[0].emp_codigo);

                setNome(data[0].emp_nome);
                setFantasia(data[0].emp_fantasia);
                // setApelido(data[0].aut_apelido);
                // setSexo(data[0].aut_sexo);
                setTelefone(data[0].emp_telefone);
                setFundacao(data[0].emp_funcacao);

                console.log(data[0].emp_nome)
                //                } catch (error) {
                //                    alert("Ocorreu um erro...");
                //                }
            }
        }
        IfCrud();
        getEmpresa();
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    async function handleEmpresa(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.emp_nome);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Autor: ",idEmpresa)
                if (idEmpresa == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('empresa', data);
                } else {
                    console.log("Alteração de Registro! ",idEmpresa)
                    await urlapi.put('/empresa/' + idEmpresa, data);
                }
                //                history.push('/autores');
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleEmpresa} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="emp_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> A/I </label>
                            <input type="text" id="aut_ativoinativo" className="form-control"
                                name="aut_ativoinativo"
                                value={ativoInativo}
                                onChange={e => setAtivo(e.target.value)}
                            />
                        </div>
                    </div> */}

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome da Empresa </label>
                            <input type="text" className="form-control"
                                name="emp_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Fantasia </label>
                            <input type="text" className="form-control" name="emp_fantasia"
                                id="emp_fantasia"
                                value={fantasia}
                                onChange={e => setFantasia(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Telefone </label>
                            <input type="text" className="form-control" name="emp_telefone"
                                id="emp_telefone"
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Ano Fundação </label>
                            <input type="text" className="form-control" name="emp_funcacao"
                                id="emp_funcacao"
                                value={fundacao}
                                onChange={e => setFundacao(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> E-mail do Autor </label>
                            <input type="text" className="form-control" name="aut_email"
                                id="aut_email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div> */}

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/empresa" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
