import React from 'react';

export default function Filho(props) {
    return (
        <div>
            <p>Nome: {props.nome}</p>
            <p>Curso: {props.curso}</p>
            <p>Cidade: {props.cidade}</p>
        </div>
    );
}