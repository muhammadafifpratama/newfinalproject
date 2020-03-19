import React, { Component } from 'react';
import Axios from 'axios'
import { mysqlapi } from "../helper/url"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { transaction } from '../redux/action'
import { Button } from '@material-ui/core';

class adminlagi extends Component {
    state = { data: [] }
    componentDidMount() {
        console.log(this.props.game);
        Axios.get(mysqlapi + 'user')
            .then((res) => {
                this.setState({ data: res.data })
                console.log(res.data.length);
            })
    }

    renderlist = () => {
        return this.state.data.map((val) => {
            return (
                <Link to='/admintes' onClick={() => this.props.transaction(val.username)}>
                    {val.username}
                    <br></br>
                </Link>
            )
        })
    }

    render() {
        return (
            <div>
                List of all user :
                <br></br>
                {this.renderlist()}
            </div>
        );
    }
}

export default connect(null, { transaction })(adminlagi)