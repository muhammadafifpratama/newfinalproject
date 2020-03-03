import React from 'react';
import Button from '@material-ui/core/Button';
import "./button.css"
import { Link } from 'react-router-dom'

export default function asd(props) {
    return (
        <div className='container full-height'>
            <div className='row'>
                <div className='col-4'>
                    <img src={props.gambar} alt='display poster' />
                </div>
                <div className='col-8'>
                    <div className='vertical-spacing'>
                        <h2>
                            {props.nama}
                        </h2>
                    </div>
                    <div className='vertical-spacing'>
                        {props.developers}
                    </div>
                    <div className='vertical-spacing'>
                        {props.publishers}
                    </div>
                    <div className='vertical-spacing'>
                        {props.genres}
                    </div>
                    <div className='vertical-spacing'>
                        {props.description}
                    </div>
                    <div className='vertical-spacing' style={{ marginTop: '100px', float: 'right' }}>
                        <Button color='danger' className='btn-custom' onClick={this.onBtnReservation}>Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}