import React, { Component } from 'react'
import { connect } from 'react-redux'

class Card extends Component {

    componentDidMount(){
        this.props.resetAuthMsg()
    }

    render() {
        return (
            <div className='content'>
                <div className='card'>
                    <div className='card-header'>
                        {this.props.title}
                    </div>
                    <div className='card-body'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null,null)(Card)