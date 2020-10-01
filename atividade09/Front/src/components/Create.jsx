import React, { Component } from 'react';
import FirebaseContext from '../utils/FirebaseContext';

const CreatePage = () => (
    <FirebaseContext.Consumer>
        {context => <Create firebase={context} />}
    </FirebaseContext.Consumer>
)

class Create extends Component {

    constructor(props) {
        super(props);

        this.state = { nome: "", curso: "", capacidade: "" };

        this.setNome = this.setNome.bind(this);
        this.setCurso = this.setCurso.bind(this);
        this.setCapacidade = this.setCapacidade.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    setNome(e) {
        this.setState({ nome: e.target.value });
    }

    setCurso(e) {
        this.setState({ curso: e.target.value });
    }

    setCapacidade(e) {
        this.setState({ capacidade: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.firebase.getFirestores().collection('disciplinas').add(
            {
                nome: this.state.nome,
                curso: this.state.curso,
                capacidade: this.state.capacidade
            }
        )
            .then(
                () => console.log(`Disciplina ${this.state.nome} inserido com sucesso.`)
            )
            .catch(
                (error) => console.log(error)
            )

        this.setState = ({ nome: "", curso: "", capacidade: "" });
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Cadastrar Disciplina</h3>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome}
                        />
                    </div>

                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso}

                        />
                    </div>

                    <div className="form-group">
                        <label>Capacidade máxima de alunos: </label>
                        <input type="text" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade}

                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Cadastrar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreatePage;