import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../../img/logo.png';

import Questao01 from '../questao01/index';
import Questao02 from '../questao02/index';
import Questao03 from '../questao03/filho';

class pgInicial extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="card text-center">
                    <img src={Logo} alt="UFC-Quixadá" />
                    <h2>Desenvolvimento de software para WEB</h2>
                    <h2>Sistemas de Informação 2020.1</h2>
                    <h2>Érica Miranda de Sousa - 418376</h2>
                    <h2>Exercício de Revisão</h2>
                </div><br />

                <div className="row">
                    <div className="col-sm-6">
                    <h4 className="card-header">Questão 01</h4>
                        <div className="card">
                            <div className="card-body">
                                <Questao01 id='q1' />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                    <h4 className="card-header">Questão 02</h4>
                        <div className="card">
                            <div className="card-body">
                                <Questao02 id='q2' nome='Letícia Farias' curso='Sistemas de Informação' cidade='Quixeramobim' /><br />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                    <h4 className="card-header">Questão 03</h4>
                        <div className="card">
                            <div className="card-body">
                                <Questao03 id='q3' nome='Marcus Vinícius' curso="Desing Digital" cidade="Choró" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default pgInicial;