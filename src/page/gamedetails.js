import React, { Component } from 'react';
import Axios from 'axios'
import { mysqlapi } from "../helper/url"
import { connect } from "react-redux"
import Kartu from "../component/caard"
import Button from '@material-ui/core/Button';

class GameDetails extends Component {
    state = { data: [] }

    componentDidMount() {
        Axios.get(mysqlapi + 'home/' + this.props.id)
            .then((res) => {
                this.setState({ data: res.data[0] })
            })
    }

    render() {
        console.log(this.props.id);
        let { data } = this.state
        console.log(data);
        return (
            <div className='container full-height'>
                <div className='row'>
                    <div className='col-4'>
                        <img src={data.gambar} alt='display poster' />
                    </div>
                    <div className='col-8'>
                        <div className='vertical-spacing'>
                            <h2>
                                {data.nama}
                            </h2>
                        </div>
                        <div className='vertical-spacing'>
                            {data.developers}
                        </div>
                        <div className='vertical-spacing'>
                            {data.publishers}
                        </div>
                        <div className='vertical-spacing'>
                            {data.genres}
                        </div>
                        <div className='vertical-spacing'>
                            {data.description}
                        </div>
                        <div className='vertical-spacing' style={{ marginTop: '100px', float: 'right' }}>
                            <Button color='danger' className='btn-custom' onClick={this.onBtnReservation}>Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = ({ game }) => {
    return {
        // game
        id: game.id
    }
}

export default connect(mapStatetoProps)(GameDetails)