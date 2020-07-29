import { db } from "../firebase/firebase";

//Creación de Transportes
export const GET_PRUEBA_REQUEST = "GET_PRUEBA_REQUEST";
export const GET_PRUEBA_SUCCESS = "GET_PRUEBA_SUCCESS";
export const GET_PRUEBA_FAILURE = "GET_PRUEBA_FAILURE";

//Obtencion de los viajes
export const GET_VIAJES_REQUEST = "GET_VIAJES_REQUEST";
export const GET_VIAJES_SUCCESS = "GET_VIAJES_SUCCESS";
export const GET_VIAJES_FAILURE = "GET_VIAJES_FAILURE";

//Registrar
export const GET_REGISTRAR_REQUEST = "GET_REGISTRAR_REQUEST";
export const GET_REGISTRAR_SUCCESS = "GET_VIAJES_SUCCESS";
export const GET_REGISTRAR_FAILURE = "GET_REGISTRAR_FAILURE";

//Busqueda de todos los clubes
const requestGetPrueba = () => {
    return {
        type: GET_PRUEBA_REQUEST
    }
}
const receiveGetPrueba = (prueba) => {
    return {
        type: GET_PRUEBA_SUCCESS,
        prueba,
    }
}
const errorGetPrueba = () => {
    return {
        type: GET_PRUEBA_FAILURE
    }
}

//Busqueda de todos los Viajes
const requestGetViajes = () => {
    return {
        type: GET_VIAJES_REQUEST
    }
}

const receiveGetViajes = (viajes) => {
    return {
        type: GET_VIAJES_SUCCESS,
        viajes,
    }
}

const errorGetViajes = () => {
    return {
        type: GET_VIAJES_FAILURE
    }
}

//Registrar un Viaje
const requestRegistrar = () => {
    return {
        type: GET_REGISTRAR_REQUEST
    }
}

const receiveRegistrar = (registro) => {
    return {
        type: GET_REGISTRAR_SUCCESS,
        registro,
    }
}

const errorRegistrar = () => {
    return {
        type: GET_REGISTRAR_FAILURE
    }
}

export const getAllPrueba = () => (dispatch) => {

    dispatch(requestGetPrueba());
    let prueba = [];

    db.ref("transporte/")
        .once("value", (snapshot) => {
            prueba = Object.values(snapshot.val());
        })
        .then(() => {
            dispatch(receiveGetPrueba(prueba));
        })
        .catch(() => {
            dispatch(errorGetPrueba());
        });
};

export const getAllViajes = () => (dispatch) => {

    dispatch(requestGetViajes());

    let viajes = [];

    db.ref("viajes/")
        .once("value", (snapshot) => {
            viajes = Object.values(snapshot.val());
        })
        .then(() => {
            dispatch(receiveGetViajes(viajes));
        })
        .catch(() => {
            dispatch(errorGetViajes());
        });
};

export const registrarViaje = (eventData) => (dispatch) => {
    dispatch(requestRegistrar());

    console.log(eventData);

    db.ref('viajes/').push(eventData)
        .then(() => {
            dispatch(receiveRegistrar(eventData));
            dispatch(errorGetViajes)
        })
        .catch(() => {
            dispatch(errorRegistrar());
        });
};