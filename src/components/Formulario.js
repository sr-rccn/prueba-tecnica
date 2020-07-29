import { connect, useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';

import { Button, Box, TextField, Checkbox, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core/';

import { registrarViaje } from "../action/prueba"

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

    const [punto_partida, setPuntoPartida] = useState('');
    const [punto_termino, setPuntoTermino] = useState('');
    const [medio_transporte, setMedioTransporte] = useState('auto');
    const [kilometros, setKilometros] = useState(0);
    const [num_pasajeros, setNumPasajeros] = useState(1);
    const [ida_vuelta, setIdaVuelta] = useState(false);

    const [c02Transporte, setC02Transporte] = useState(0);

    const agregarViaje = () => {
        var i_v = ida_vuelta != false ? 2 : 1;

        var new_data = {
            punto_partida: punto_partida,
            punto_termino: punto_termino,
            medio_transporte: medio_transporte,
            kilometros: kilometros,
            num_pasajeros: num_pasajeros,
            ida_vuelta: ida_vuelta,
            c02: (c02Transporte * kilometros * num_pasajeros) * i_v,
        }

        console.log(c02Transporte);

        if (punto_partida.length < 5 || punto_termino.length < 5 || medio_transporte.length < 3 ||
            kilometros.length <= 0 || num_pasajeros.length <= 0) {
            alert("Los datos son incorrectos");
        } else {
            dispatch(registrarViaje(new_data));
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case "punto_partida":
                setPuntoPartida(value)
                break;
            case "punto_termino":
                setPuntoTermino(value)
                break;
            case "medio_transporte":
                setMedioTransporte(value)
                break;
            case "kilometros":
                setKilometros(value)
                break;
            case "num_pasajeros":
                setNumPasajeros(value)
                break;
            case "ida_vuelta":
                setIdaVuelta(value)
                break;
            default:
                break;

        }
    }

    const handleChangeTransporte = (event) => {
        setMedioTransporte(event.target.value);
        switch (event.target.value) {
            case 'auto':
                setC02Transporte(0.21)
                break;
            case 'metro':
                setC02Transporte(0.033)
                break;
            case 'camioneta':
                setC02Transporte(0.249)
                break;
            case 'moto':
                setC02Transporte(0.092)
                break;
            case 'bus_transantiago':
                setC02Transporte(0.039)
                break;
            case 'bus':
                setC02Transporte(0.012)
                break;
            case 'avion_nacional':
                setC02Transporte(0.279)
                break;
            case 'avion_internacional':
                setC02Transporte(0.179)
                break;
            case 'pie':
                setC02Transporte(0)
                break;
            default:
                setC02Transporte(0.21)
                break;
        }

    };
    useEffect(() => {
        switch (medio_transporte) {
            case 'auto':
                setC02Transporte(0.21)
                break;
            case 'metro':
                setC02Transporte(0.033)
                break;
            case 'camioneta':
                setC02Transporte(0.249)
                break;
            case 'moto':
                setC02Transporte(0.092)
                break;
            case 'bus_transantiago':
                setC02Transporte(0.039)
                break;
            case 'bus':
                setC02Transporte(0.012)
                break;
            case 'avion_nacional':
                setC02Transporte(0.279)
                break;
            case 'avion_internacional':
                setC02Transporte(0.179)
                break;
            case 'pie':
                setC02Transporte(0)
                break;
            default:
                setC02Transporte(0.21)
                break;
        }
    }, [])


    const classes = useStyles();

    return (
        <>
            <h1>Registrando un viaje</h1>
            <form className={classes.container} noValidate autoComplete="off">

                <div>
                    <TextField className={classes.text_field} label="Punto de Partida" id="standard-start-adornment"
                        type='text'
                        name='punto_partida'
                        onChange={handleChange}
                        value={punto_partida} />
                    <TextField className={classes.text_field} label="Punto de Termino" id="standard-start-adornment"
                        name='punto_termino'
                        onChange={handleChange}
                        value={punto_termino}
                    />
                </div>

                <div>
                    <div>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Transporte</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={medio_transporte}
                                onChange={handleChangeTransporte}
                            >
                                <MenuItem value='auto'>Automovil</MenuItem>
                                <MenuItem value='metro'>Metro</MenuItem>
                                <MenuItem value='camioneta'>Camioneta</MenuItem>
                                <MenuItem value="moto">Motocicleta</MenuItem>
                                <MenuItem value="camion">Camion</MenuItem>
                                <MenuItem value="bus">Bus</MenuItem>
                                <MenuItem value="bus_transantiago">TranSantiago</MenuItem>
                                <MenuItem value="avion_chile">Avion (Nacional)</MenuItem>
                                <MenuItem value="avion_internacional">Avion Internacional</MenuItem>
                                <MenuItem value="pie">Pie</MenuItem>
                            </Select>
                        </FormControl>

                    </div>


                    <TextField className={classes.text_field} label="Cantidad de Kilometros" id="standard-start-adornment"
                        type='number'
                        name='kilometros'
                        onChange={handleChange}
                        value={kilometros} />
                </div>

                <div>
                    <TextField className={classes.text_field} label="Numero de Pasajeros" id="standard-start-adornment"
                        type='number'
                        name='num_pasajeros'
                        onChange={handleChange}
                        value={num_pasajeros} />

                    <p className={classes.ida_vuelta}>¿Ida y Vuelta?
                            <Checkbox
                            name='ida_vuelta'
                            value={ida_vuelta}
                            onClick={() => setIdaVuelta(!ida_vuelta)}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }} />
                    </p>
                </div>

                <div >
                    <Button variant="contained" color="primary" onClick={() => agregarViaje(medio_transporte)}>
                        Agregar
                    </Button>
                </div>
            </form>
        </>

    );
}
export default connect(mapStateToProps)(Transportes)

const useStyles = makeStyles((theme) => ({
    container: {
        alignSelf: 'center',
        width: '800px',
        height: '500px',
        backgroundColor: 'white',
        alignContent: 'center',
        marginBottom: '250px',
    },
    text_field: {
        margin: '25px',
    },
    ida_vuelta: {
        alignSelf: 'center',
        color: 'black',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));