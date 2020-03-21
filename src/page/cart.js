import React, { Component } from 'react';
import Axios from 'axios'
import { mysqlapi } from "../helper/url"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

class cart extends Component {
    state = { data: [], totalharga: 0, redirect: false }
    componentDidMount() {
        let username = localStorage.getItem('username');
        Axios.get(mysqlapi + 'cart/' + username)
            .then((res) => {
                var i = 0;
                var j = 0
                for (i = 0; i < res.data.length; i++) {
                    j += res.data[i].harga;
                }
                this.setState({ data: res.data, totalharga: j })
                console.log(j);
            })
    }

    deletecart = (idcart) => {
        let username = localStorage.getItem('username');
        Axios.delete(mysqlapi + 'cart/' + idcart)
            .then((res) => {
                console.log(res.data)
                Axios.get(mysqlapi + 'cart/' + username)
                    .then((res) => {
                        var i = 0;
                        var j = 0
                        for (i = 0; i < res.data.length; i++) {
                            j += res.data[i].harga;
                        }
                        this.setState({ data: res.data, totalharga: j })
                        alert('Delete Successful!')
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    keygenerator = () => {
        var asd1 = Math.random().toString(16).substr(0, 7).split('.');
        var asd2 = Math.random().toString(36).substr(0, 7).split('.');
        var asd3 = Math.random().toString(36).substr(0, 7).split('.');
        var key = asd1[1] + '-' + asd2[1] + '-' + asd3[1]
        return key
    }

    inventory = async () => {
        console.log(this.state.data);
        let daftargame = ''
        for (let i = 0; i < this.state.data.length; i++) {
            let namagame = this.state.data[i].namagame
            daftargame += namagame + ','
        }
        let username = localStorage.getItem('username');
        let hargatotal = this.state.totalharga
        let isi = await Axios.get(mysqlapi + 'profile/' + username)
        let wallet = isi.data[0].saldo
        let saldo = wallet - hargatotal
        console.log(isi.data[0].saldo);
        if (hargatotal === 0) {
            alert('beli game dulu')
        }
        else {
            if (wallet < hargatotal) {
                alert("saldo tidak cukup")
            }
            else {
                // console.log(isi);
                let update = await Axios.patch(mysqlapi + 'saldo', { saldo, username })
                // var transactiondate = moment().format("YYYY-MM-DD H:mm:ss")
                let response = await Axios.post(mysqlapi + 'inventory', { username, hargatotal, daftargame })
                // console.log(response.data);
                for (let i = 0; i < this.state.data.length; i++) {
                    let namagame = this.state.data[i].namagame
                    try {
                        let key = this.keygenerator()
                        let bwaaaaaaah = await Axios.post(mysqlapi + 'transaction', { username, key, namagame })
                    } catch (error) {
                        console.log(error.response.data);
                    }
                }
                let empty = await Axios.delete(mysqlapi + 'transaction/' + username)
                console.log(empty.data);
                alert('transaction succesful')
                this.setState({ redirect: true })
            }
        }
    }

    render() {
        console.log(this.state.totalharga);
        if (this.state.redirect) {
            return <Redirect to='/finish' />
        }
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="spanning table">
                        <TableBody>
                            {this.state.data.map(row => (
                                <TableRow key={row.idcart}>
                                    <TableCell>{row.namagame}</TableCell>
                                    <TableCell align="right">Rp. {row.harga.toLocaleString()}</TableCell>
                                    <IconButton aria-label="delete" onClick={() => { this.deletecart(row.idcart) }}> <DeleteIcon /></IconButton>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell >Subtotal </TableCell>
                                <Button onClick={() => { this.inventory() }}>
                                    confirm purchases
                        </Button>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default cart;