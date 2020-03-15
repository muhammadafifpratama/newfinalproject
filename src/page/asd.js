import React, { Component } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { onketik, login, ceklogin } from '../redux/action'

class asd extends Component {
    tes = () => {
        this.props.login(this.props.loginkucing)
        console.log(this.props.user.checked + ' ' + this.props.user.username);
        console.log(this.props.loginkucing.username);
    }

    componentDidMount() {
        this.props.ceklogin()
    }

    componentDidUpdate() {
        if (this.props.user.username) {
            console.log(this.props.loginkucing.username);
        }
    }

    render() {
        return (

            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Box width={800} height={300} bgcolor="grey.300" p={1} my={0.5}>
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <TextField id="standard-basic" label="Username" value={this.props.loginkucing.username} onChange={(val) => this.props.onketik('Username', val)} > </TextField>
                        <br></br>
                        <TextField id="standard-password-input" label="Password" type="password"> </TextField>
                        <br></br>
                        <Button variant="contained" color="secondary" style={{ minWidth: '185px' }} onClick={this.tes}>Login</Button>
                        <br></br><br></br>
                        <Link to="/forgot_password">
                            <center>Forgot Password?</center>
                        </Link>
                    </div>
                </Box >
            </ div >
        )
    }
}

const mapstatetoprops = ({ loginkucing, user }) => {
    return { loginkucing, user }
}

export default connect(mapstatetoprops, { onketik, login, ceklogin })(asd)