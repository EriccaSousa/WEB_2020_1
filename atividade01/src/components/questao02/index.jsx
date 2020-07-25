import React from 'react'

class printarDadosProps extends React.Component {
    render() {
        return (
            <div>
                <p>Nome: {this.props.nome}</p>
                <p>Curso: {this.props.curso}</p>
                <p>Cidade: {this.props.cidade}</p>
            </div>
        );
    }
}

export default printarDadosProps;