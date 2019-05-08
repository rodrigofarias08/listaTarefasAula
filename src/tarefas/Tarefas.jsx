import React, { Component } from 'react'
import axios from 'axios'

export default class Tarefas extends Component {
    constructor(props) {
        super(props);
        this.state = {

            listaTarefas: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/tarefas')
            .then(resposta => {
                //se deu errado:
                this.setState({ listaTarefas: resposta.data })
            })
            .catch(resposta => {
                //se deu errado:
                alert('Deu errado!')
                console.log(resposta)
            })
    }

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ibox ">
                            <div className="ibox-content">
                                <h2>Lista de Tarefas</h2>
                                <small>0 pendentes 0 concluídas</small>
                                <ul className="todo-list m-t small-list ui-sortable">
                                    {this.state.listaTarefas.map(tarefa =>
                                        <li key={tarefa.id}>
                                            <input type="checkbox" checked={tarefa.concluida}></input>
                                            <span className={`m-l-xs ${tarefa.concluida ? 'todo-completed' : ''}`}> {tarefa.descricao} </span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

