import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../store/actions/authActionCreator'
import Card from './Card'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = { login: '', password: '', loading: false }

        this.setLogin = this.setLogin.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this._isMounted = false
    }

    componentDidMount(){
        this._isMounted = true
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    setLogin(e) {
        this.setState({ login: e.target.value })
    }

    setPassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState({ loading: true })

        this.props.signup(this.state.login, this.state.password, (user) => {
            this._isMounted && this.setState({ loading: false })
        })
        this.setState({ login: '', password: '' })
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status"
                        aria-hidden="true">

                    </span>
                            Carregando...
                </button>
            )
        }
        return <input type="submit" value="Cadastrar" className="btn btn-primary" />

    }

    renderMessage() {
        if (this.props.authMsg) {
            let alertType = this.props.authMsg.includes('Err') ? 'alert-danger' : 'alert-info'
            return (
                <div className={`alert ${alertType}`} role='alert'>
                    {this.props.authMsg}
                </div>
            )
        }
    }

    render() {
        return (
            <Card title='Faça o seu cadastro'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Login: </label>
                        <input type="text" className="form-control"
                            value={this.state.login} onChange={this.setLogin} />
                    </div>
                    <div className="form-group">
                        <label>Senha: </label>
                        <input type="password" className="form-control"
                            value={this.state.password} onChange={this.setPassword} />
                    </div>
                    <div className="form-group">
                        {this.renderButton()}
                    </div>
                </form>
                {this.renderMessage()}
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        authMsg: state.authReducer.authMsg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signup(login, password, callback) {
            const action = signup(login, password, callback)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Signup);

