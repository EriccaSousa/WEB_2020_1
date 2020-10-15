import React, { Component } from 'react'
import Card from './Card'

import { connect } from 'react-redux'

class RestrictedCard extends Component {
    
    componentDidMount() {
        if (this.props.auth.isLoaded && this.props.auth.isEmpty) {
            this.props.history.push('/signin')
        }

        if (!this.props.verified) {
            this.props.history.push('/signin')
        }
    }

    logout() {
        this.props.signout(
            () => {
                this.props.history.push('/signin')
            }
        )
    }

    render() {
        return (
            <Card title={this.props.title}>
                {this.props.children}
                <button className='btn btn-danger' onClick={() => this.logout()}>
                    Logout
                </button>
            </Card>
        )
    }
}



export default connect(
    
)(RestrictedCard);