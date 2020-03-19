import React, { Component } from 'react';
import Axios from 'axios'
import { mysqlapi } from "../helper/url"
import List from '../component/collapsiblelist'
import { connect } from "react-redux"

class admin extends Component {
    state = { data: [], data1: [] }
    componentDidMount() {
        console.log(this.props.game);
        Axios.get(mysqlapi + 'transaction/' + this.props.game)
            .then((res) => {
                this.setState({ data: res.data })
                console.log(res.data.length);
            })
    }

    renderlist = () => {
        return this.state.data.map((val) => {
            return (
                <List tanggal={val.transactiondate} harga={val.hargatotal} game={val.daftargame}></List>
            )
        })
    }
    render() {
        console.log(this.props.game);
        return (
            <div>
                {this.renderlist()}
            </div>
        );
    }
}

const mapStatetoProps = ({ game }) => {
    return { game }
}

export default connect(mapStatetoProps)(admin)