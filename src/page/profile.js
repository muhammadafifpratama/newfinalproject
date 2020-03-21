import React, { Component } from 'react';
import Axios from 'axios'
import { mysqlapi } from "../helper/url"

class profile extends Component {
    state = { profile: [] }
    async componentDidMount() {
        var username = localStorage.getItem('username');
        Axios.get(mysqlapi + 'profile/' + username)
            .then((res) => {
                this.setState({ profile: res.data[0] })
            })
    }
    render() {
        console.log(this.state.profile);
        return (<div>
            <p>
                username : {this.state.profile.username}
            </p>
            email : {this.state.profile.email}
            <p>balance : {this.state.profile.saldo}</p>
        </div>);
    }
}

export default profile;