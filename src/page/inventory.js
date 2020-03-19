import React, { Component } from 'react';
import Axios from 'axios'
import { mysqlapi } from "../helper/url"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
let username = localStorage.getItem('username');
class inventory extends Component {
    state = { data: [], ofset: 1 }
    componentDidMount() {
        Axios.get(mysqlapi + 'inventory/' + username + '/' + this.state.ofset)
            .then((res) => {
                console.log(res.data);
                this.setState({ data: res.data })
            })
    }

    nextpage = async () => {
        let ofset = this.state.ofset + 10
        try {
            let panjang = Axios.get(mysqlapi + 'panjang/' + username)
            let cekpanjang = ((await panjang).data[0].panjang);
            if (ofset < cekpanjang) {
                let response = Axios.get(mysqlapi + 'inventory/' + username + '/' + ofset)
                this.setState({ data: (await response).data, ofset: ofset });
            }
            else {
                console.log('datanya udah abis');
            }
        }
        catch (err) {
            console.log(err.response.data);
        }
        // if(this.state.ofset )
    }
    prevpage = async () => {
        let ofset = this.state.ofset - 10
        if (ofset < 1) {
            console.log('ini page pertama');
        }
        else {
            let response = Axios.get(mysqlapi + 'inventory/' + username + '/' + ofset)
            this.setState({ data: (await response).data, ofset: ofset });
        }
        console.log(ofset);
    }

    render() {
        console.log(this.state.ofset);

        return (<div><TableContainer component={Paper}>
            <Table aria-label="spanning table">
                <TableBody>
                    {this.state.data.map(row => (
                        <TableRow key={row.idtransactiondetail}>
                            <TableCell>{row.namagame}</TableCell>
                            <TableCell align="right">{row.key}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableRow>
                    <TableCell>                <Button onClick={() => { this.prevpage() }}>
                        previous page
                        </Button></TableCell>
                    <TableCell align="right">                <Button onClick={() => { this.nextpage() }}>
                        next page
                        </Button></TableCell>
                </TableRow>
            </Table>
        </TableContainer>
        </div>);
    }
}

export default inventory;