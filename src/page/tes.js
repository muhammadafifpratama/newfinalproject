import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import Axios from 'axios'
import { mysqlapi } from "../helper/url"
import Grid from '@material-ui/core/Grid';

class APP extends Component {
    state = { username: [] }
    componentDidMount() {
        console.log(this.props.game);
        Axios.get(mysqlapi + 'user')
            .then((res) => {
                this.setState({ username: res.data })
                console.log(res.data.length);
                for (let i = 0; i < res.data.length; i++) {
                    Axios.get(mysqlapi + 'transaction/' + res.data[i].username)
                        .then((res1) => {
                            console.log(res.data[i].username);
                            console.log(res1.data);
                        })
                }
            })
    }

    setusername = async () => {

    }

    render() {
        return (
            <div>
                <a href='/'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={3}>
                                {[0, 1, 2, 3].map(value => (
                                    <Grid key={value} item>
                                        <div>
                                            <img class="entity-image" src={value.gambar} alt=""></img>
                                            <div>
                                                <span class="entity-title">Phoenix Wright: Ace Attorney Trilogy</span>
                                            </div>
                                            <div>
                                                <span class="entity-title">harga</span>
                                            </div>
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>

                </a>
            </div>
        )
    }
}

export default APP;