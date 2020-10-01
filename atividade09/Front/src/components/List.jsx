import React, { Component } from 'react';

import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext';
import FirebaseService from '../service/FirebaseService';

const ListPage = () => (
    <FirebaseContext.Consumer>
        {context => <List firebase={context} />}
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props) {
        super(props);

        this._isMounted = false;
        this.state = { disciplinas: [], loading: false };
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({ loading: true });

        FirebaseService.list(
            this.props.firebase.getFirestore(),
            (disciplinas) => {
                if (disciplinas) {
                    if (this._isMounted) {
                        this.setState({ disciplinas: disciplinas, loading: false });
                    }
                }
            }
        )
    }

    montarTabela() {
        if (!this.state.disciplinas) return;

        return this.state.disciplinas.map(
            (disc, i) => {
                return <TableRow disciplina={disc}
                    key={i}
                    firebase={this.props.firebase}
                />
            }
        )
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    loadingSpinner() {
        return (
            <tr style={{ backgroundColor: '#fff' }}>
                <td colSpan='6'>
                    <div className="text-center">
                        <div className="spinner-border ml-auto"
                            role="status"
                            aria-hidden="true"
                            style={{ width: '3rem', height: '3rem' }}></div><br />
                        <strong>Loading...</strong>
                    </div>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <p>Listar Disciplinas!</p>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>CAPACIDADE</th>
                            <th colSpan="2"> </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.montarTabela()}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default ListPage;
