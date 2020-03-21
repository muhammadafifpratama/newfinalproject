import React, { Component } from 'react';
import { connect } from "react-redux"
import Axios from 'axios'
import { mysqlapi } from "../helper/url"
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { kirimid } from '../redux/action'
import Kartu from "../component/caard"
class search extends Component {
    state = { data: [], ofset: 0 }

    componentDidMount() {
        Axios.get(mysqlapi + 'searching/' + this.props.game + '/' + this.state.ofset)
            .then((res) => {
                this.setState({ data: res.data })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.game !== prevProps.game) {
            Axios.get(mysqlapi + 'searching/' + this.props.game + '/' + this.state.ofset)
                .then((res) => {
                    this.setState({ data: res.data })
                    console.log(res.data);
                })
            console.log('kenaoaaaaaaaaaa');
        }
    }

    nextpage = async () => {
        let ofset = this.state.ofset + 9
        try {
            let panjang = Axios.get(mysqlapi + 'psearching/' + this.props.game)
            let cekpanjang = ((await panjang).data[0].panjang);
            if (ofset < cekpanjang) {
                let response = await Axios.get(mysqlapi + 'searching/' + this.props.game + '/' + ofset)
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
        let ofset = this.state.ofset - 9
        if (ofset < 1) {
            console.log('ini page pertama');
        }
        else {
            let response = await Axios.get(mysqlapi + 'searching/' + this.state.isi + '/' + ofset)
            this.setState({ data: (await response).data, ofset: ofset });
        }
        console.log(ofset);
    }

    render() {
        return (
            <div>
                <a href='/'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={3}>
                                {this.state.data.map(value => (
                                    <Grid key={value.id} item>
                                        <Kartu nama={value.nama} image={value.gambar} harga={value.harga} kucing={value.id}>  </Kartu>
                                        {/* <div>
                                            <img class="entity-image" src={value.gambar} alt=""></img>
                                            <div>
                                                <span class="entity-title">{value.nama}</span>
                                                <span class="entity-title" style={paper}>{value.harga}</span>
                                            </div>
                                        </div> */}
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </a>
                <center>
                    <Button onClick={() => { this.prevpage() }}>
                        previous page
                        </Button>
                    <Button onClick={() => { this.nextpage() }}>
                        next page
                        </Button>
                </center>
            </div>
        );
    }
}

const mapStatetoProps = ({ game }) => {
    return { game }
}

export default connect(mapStatetoProps, { kirimid })(search)