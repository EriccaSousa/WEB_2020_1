import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../../Assets/Images/logo.png';

import { Arena, Hero, Enemy } from '../questao01/index'
import { HanmaBaki, RetsuKaioh, Dorian, HectorDoyle, UndergroundArena } from '../questao02/images.js';

const World = props => {
    return (
        <div className='container'>

            <div className="card mb-3 text-center">
                <img src={Logo} alt="UFC-Quixadá" />
                <div className="card-body">
                    <h3> Desenvolvimento de software para WEB </h3>
                    <h3>Sistemas de Informação 2020.1</h3>
                    <h3>Érica Miranda de Sousa - 418376</h3>
                    <h3>Lista 02</h3>
                </div>
            </div>

            <div className="card mb-3">
                <img src={UndergroundArena} alt="Imagem de capa do card" />
                <div className="card-body">
                    <div className="card-header"> Batalha 01</div>

                    <Arena arena='Tokio Dome – Underground Arena'>
                        <Hero nome='Baki Hanma' img={HanmaBaki} />
                        <Enemy nome='Retsu Kaioh' img={RetsuKaioh} />
                    </Arena>

                </div>
            </div>

            <div className="card mb-3">
                <img src={UndergroundArena} alt="Imagem de capa do card" />
                <div className="card-body">
                    <div className="card-header"> Batalha 02</div>

                    <Arena arena='Tokio Dome – Underground Arena'>
                        <Hero nome='Dorian' img={Dorian} />
                        <Enemy nome='HectorDoyle' img={HectorDoyle} />
                    </Arena>

                </div>
            </div>

            <div className="card mb-3">
                <img src={UndergroundArena} alt="Imagem de capa do card" />
                <div className="card-body">
                    <div className="card-header"> Batalha 03</div>

                    <Arena arena='Tokio Dome – Underground Arena'>
                        <Hero nome='Baki Hanma' img={HanmaBaki} />
                        <Enemy nome='Dorian' img={Dorian} />
                    </Arena>

                </div>
            </div>

        </div >
    );
}

export { World };