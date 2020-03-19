import React, { Component } from 'react';
import { connect } from "react-redux"
import Axios from 'axios'
import { mysqlapi } from "../helper/url"
import Kartu from "../component/caard"

class search extends Component {
    state = { data: [] }

    componentDidMount() {
        // console.log(this.props.game);
        Axios.get(mysqlapi + 'searching/' + this.props.game)
            .then((res) => {
                // console.log(res.data);
                this.setState({ data: res.data })
            })
    }

    renderkartu = () => {
        return this.state.data.map((val) => {
            return (
                <Kartu nama={val.nama} image={val.gambar} harga={val.harga} kucing={val.id} style={{ display: 'flex', flexDirection: 'row' }}> </Kartu>
            )
        })
    }

    render() {
        console.log(this.props.game)
        return (<div>
            <div class="container">
                {/* <div class="row"> */}
                {this.renderkartu()}
                {/* </div> */}
            </div>
        </div>);
    }
}

const mapStatetoProps = ({ game }) => {
    return { game }
}

export default connect(mapStatetoProps)(search)