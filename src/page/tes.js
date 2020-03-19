import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import Axios from 'axios'
import { mysqlapi } from "../helper/url"

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
                <Collapsible trigger={`${this} v`}>
                    isi.map((item)=> {
                        <Collapsible trigger="Start here">
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                    })
                </Collapsible>
            </div>
        )
    }
}

export default APP;