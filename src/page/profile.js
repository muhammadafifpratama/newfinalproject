import React, { Component } from 'react';
import Axios from 'axios'
import { mysqlapi, admin } from "../helper/url"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class profile extends Component {
    state = { profile: [], voucher: "" }
    async componentDidMount() {
        var username = localStorage.getItem('username');
        Axios.get(mysqlapi + 'profile/' + username)
            .then((res) => {
                this.setState({ profile: res.data[0] })
            })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    cekvocer = () => {
        let code = this.state.voucher
        console.log(this.state.voucher);
        Axios.post(mysqlapi + 'voucher', {
            code
        }).then(res => {
            if (res.data.length === 0) {
                alert("voucher is not found or has been used or expired")
            }
            else {
                console.log(res.data[0].status);
                if (res.data[0].status == 'unused') {
                    let username = this.state.profile.username
                    let saldo = this.state.profile.saldo + res.data[0].value
                    Axios.patch(mysqlapi + 'saldo', {
                        username,
                        saldo
                    }).then(a => {
                        alert("voucher has been successfully redeemed")
                        Axios.patch(admin + 'saldo', {
                            code
                        })
                    })
                }
                else {
                    alert("voucher is not found or has been used or expired")
                }
            }
            console.log(res.data.length)
        }).catch(err => {

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
                <div>
                    <p>VERIFIED</p>
                    <TextField id="outlined-basic" label="Enter Coupon Code" variant="outlined" name="voucher" onChange={this.onChange} value={this.state.voucher} /><br></br>
                    <Button variant="contained" color="secondary" style={{ minWidth: '185px' }} onClick={() => { this.cekvocer() }}>Claim Coupon</Button>
                </div>
            )
        else {
            console.log(this.state.profile.state);
        }
    }

    render() {
        // console.log(this.state.profile);
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