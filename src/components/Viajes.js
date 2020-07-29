import { connect } from 'react-redux';
import React from "react";

import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { Card, CardContent, Typography } from '@material-ui/core/';


function mapStateToProps(state) {
    return {
        //menu
        prueba: state.prueba,
        transportes: state.prueba.prueba,
        viajes: state.prueba.viajes
    }
}

export const Viajes = props => {

    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="sm">
                <h1>Viajes</h1>
                {props.prueba.viajesFetched ? props.viajes.map((res, k, n, d) => {
                    return (
                        <Card variant="outlined" className={classes.root} key={n + k}>
                            <div className={classes.container_viajes}>

                                <div className={classes.detalle_transporte}>
                                    <CardContent >
                                        <div>Transporte</div>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {res.medio_transporte}
                                        </Typography>
                                    </CardContent>
                                    <CardContent >
                                        <div>C02 Emitido</div>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {res.c02}
                                        </Typography>
                                    </CardContent>
                                </div>

                                <div>
                                    <CardContent >
                                        <div>Trabajadores</div>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {res.num_pasajeros}
                                        </Typography>
                                    </CardContent>
                                    <CardContent >
                                        <div>¿Ida y vuelta?</div>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Si
                                        </Typography>
                                    </CardContent>
                                </div>

                                <div className={classes.detalle_viaje}>
                                    <CardContent >
                                        <div>Punto Partida</div>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {res.punto_partida}
                                        </Typography>
                                    </CardContent>
                                    <CardContent >
                                        <div>Punto Termino</div>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {res.punto_termino}
                                        </Typography>
                                    </CardContent>
                                    <CardContent >
                                        <div>Kilometros</div>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {res.kilometros}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    )
                }) : 'Cargando'}

            </Container>

        </div>
    );
}
export default connect(mapStateToProps)(Viajes)

const useStyles = makeStyles({
    container_viajes: {
        display: 'flex',
        flexDirection: 'column',
    },
    detalle_transporte: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detalle_viaje: {
        display: 'flex',
        flexDirection: 'row',
    },
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
