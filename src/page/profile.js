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

    onBtnResendEmailClick = () => {
        let email = this.state.profile.email
        Axios.post(mysqlapi + 'resendemailconfirm', {
            email
        }).then(res => {
            alert(res.data.message)
        }).catch(err => {
            console.log(err.response)
            alert(err.response.data.message)
        })
        console.log('test')
    }

    renderstatus = () => {
        if (this.state.profile.status == 'unverified') {
            return (
                <div className="pt-5 text-center">
                    <h1>Tolong Periksa Email Anda Untuk Konfirmasi</h1>
                    <h4>Klik Button Dibawah Bila Tidak Menerima Emailnya</h4>
                    <input type="button" className="btn btn-primary" value="Resend Email" onClick={this.onBtnResendEmailClick} />
                </div>
            )
        }
        else if (this.state.profile.status == 'verified')
            return (
                <p>VERIFIED</p>
            )
        else {
            console.log(this.state.profile.state);
        }
    }

    render() {
        console.log(this.state.profile);
        return (<div>
            <p>
                username : {this.state.profile.username}
            </p>
            email : {this.state.profile.email}
            <p>balance : {this.state.profile.saldo}</p>
            <p>Date Joined : {this.state.profile.tanggalbergabung}</p>
            <p>Status : {this.renderstatus()}</p>
        </div>);
    }
}

export default profile;