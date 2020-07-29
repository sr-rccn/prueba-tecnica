import { connect } from 'react-redux';
import React, { useState, useEffect } from "react";

import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { getAllPrueba, getAllViajes } from "../action/prueba"

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


function mapStateToProps(state) {
    return {
        //menu
        prueba: state.prueba,
        transportes: state.prueba.prueba,
        viajes: state.prueba.viajes
    }
}

export const Transportes = props => {
    const { dispatch } = props;

    const classes = useStyles();


    return (
        <div>
            <Container maxWidth="sm">
                <h1>Transportes</h1>
                <Box>
                    {props.prueba.pruebaFetched ? props.transportes.map((res, k, n, d) => {
                        return (
                            <Card variant="outlined" className={classes.root} key={n + k}>
                                <CardContent >
                                    <div>Nombre</div>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {res.nombre}
                                    </Typography>
                                </CardContent>
                                <CardContent >
                                    <div>Huella de C02</div>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {res.kgC02}
                                    </Typography>
                                </CardContent>
                                <CardContent >
                                    <div>Motor</div>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {res.motor}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                </CardActions>

                            </Card>

                        )
                    }) : 'Cargando'}
                </Box>
            </Container>
        </div>
    );
}
export default connect(mapStateToProps)(Transportes)

const useStyles = makeStyles({
    box: {
        width: '70%',
        backgroundColor: "red",
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginBottom: '25px',
        // backgroundColor: theme.palette.background.paper,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
