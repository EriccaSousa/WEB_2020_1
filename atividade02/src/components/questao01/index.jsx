import React from 'react';

const Hero = props => {
    return (
        <>
            <h3>Hero - Nome: {props.nome} </h3>
            <img src={props.img} alt=""/>
        </>
    );
}


const Enemy = props => {
    return (
        <>
            <h3>Enemy - Nome: {props.nome} </h3>
            <img src={props.img} alt=""/>
        </>
    );
}


const Arena = props => {
    return (
        <>
          {props.children} 
        </>
    );
}

export {Arena, Hero, Enemy};