import React, { Component } from 'react';

class thanks extends Component {
    state = {}
    render() {
        return (
            <div>
                <center>
                    thank you for buying our game<br></br>
                you can check for your game keys in your <a href='/inventory'>inventory</a> at your profile or <br></br>
                you can go back <a href='/'>home</a> and browse more games
                </center>
            </div>
        );
    }
}

export default thanks;