import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./button.css"
import { connect } from "react-redux"
import { kirimid } from '../redux/action'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        justifyContent: 'center'
    },
});

const ImgMediaCard = (props) => {
    const classes = useStyles();
    // () => this.props.kirimid(props.nama)
    return (
        <Card className={classes.root} onClick={() => props.kirimid(props.kucing)} style={{ flex: 1 }} >
            {/* <a onClick={console.log('kekirim')} href='/game'> */}
            <Link to='/game'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={props.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.nama}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* </a> */}
                <CardActions classes={{ root: classes.root }}>
                    <Button size="small" color="primary" className="button">
                        Rp {props.harga.toLocaleString()}
                    </Button>
                </CardActions>
            </Link>
        </Card >
    );
}

export default connect(null, { kirimid })(ImgMediaCard)