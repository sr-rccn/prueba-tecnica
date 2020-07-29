import { connect } from 'react-redux';
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Box, Typography, Container} from '@material-ui/core/'


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
