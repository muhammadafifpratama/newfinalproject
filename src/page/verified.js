import React, { Component } from 'react';
import Axios from "axios"
import { mysqlapi } from '../helper/url'

class verified extends Component {
    state = { message: 'Verifying Email, Please Wait...' }

    componentDidMount() {
        let str = this.props.location.search
        let res = str.split("=");
        let email = res[1]
        console.log(email);

        Axios.patch(mysqlapi + 'verified/' + email)
            .then(res => {
                this.setState({ message: 'Email Berhasil di Confirm' })
            }).catch(err => {
                this.setState({ message: 'Email Gagal di Confirm' })
                console.log(err.response.data);
            })
    }

    render() {
        return (
            <div className="pt-5 text-center">
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default verified;