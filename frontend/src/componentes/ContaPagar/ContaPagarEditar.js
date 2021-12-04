import React from "react"
import './AutoresEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function ContaPagarEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    //    const [autor, setAutor] = useState([]);

    const [codigo, setCodigo] = useState(0);

    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('');
    // const [apelido, setApelido] = useState('');
    // const [sexo, setSexo] = useState('');
    const [valor, setValor] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [codEmpresa, setCodEmpresa] = useState('');

    const [checked, setChecked] = useState(false);
    //    const [nomePag, setNomePag] = useState(false);

    const { idContaPagar } = useParams();

    function IfCrud() {
        //        let nomeCampo = '';
        console.log('Id Empresa: ' + idContaPagar + ' - ' + idBoolean)
        if (idContaPagar === 0) {
            //            nomeCampo = 'Inclusão de Autor';
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Autor';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getContaPagar() {
            console.log('Conta a Pagar: ' + idContaPagar + ' - ' + idBoolean)
            if (idContaPagar == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/contaPagar/' + idContaPagar);
                console.log(data)

                setCodigo(data[0].tpg_codigo);

                setDescricao(data[0].tpg_descricao);
                setTipo(data[0].tpg_tipo);
                // setApelido(data[0].aut_apelido);
                // setSexo(data[0].aut_sexo);
                setValor(data[0].tpg_valor);
                setVencimento(data[0].tpg_vencimento);
                setCodEmpresa(data[0].emp_codigo);

                console.log(data[0].tpg_descricao)
                //                } catch (error) {
                //                    alert("Ocorreu um erro...");
                //                }
            }
        }
        IfCrud();
        getContaPagar();
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    async function handleContaPagar(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.tpg_descricao);

        try {
            if (descricao.length === 0) {
                alert('Insira uma descrição válida')
            } else {
                console.log("Codigo Conta a Pagar: ",idContaPagar)
                if (idContaPagar == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('contaPagar', data).then(response => alert('Inserção feita com sucesso!!!'))
                } else {
                    console.log("Alteração de Registro! ",idContaPagar)
                    await urlapi.put('/contaPagar/' + idContaPagar, data).then(response => alert('Edição feita com sucesso!!!'))
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

                <form className="form--autor" onSubmit={handleContaPagar} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="tpg_codigo"
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
                            <label> Descrição </label>
                            <input type="text" className="form-control"
                                name="tpg_descricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Tipo </label>
                            <input type="text" className="form-control" name="tpg_tipo"
                                id="tpg_tipo"
                                value={tipo}
                                onChange={e => setTipo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Valor </label>
                            <input type="text" className="form-control" name="tpg_valor"
                                id="tpg_valor"
                                value={valor}
                                onChange={e => setValor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Vencimento </label>
                            <input type="text" className="form-control" name="tpg_vencimento"
                                id="tpg_vencimento"
                                value={vencimento}
                                onChange={e => setVencimento(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Código da Empressa </label>
                            <input type="text" className="form-control" name="emp_codigo"
                                id="emp_codigo"
                                value={codEmpresa}
                                onChange={e => setCodEmpresa(e.target.value)}
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
                        <Link to="/contaPagar" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
