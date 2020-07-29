import {
    //Buscar Club
    GET_PRUEBA_REQUEST,
    GET_PRUEBA_SUCCESS,
    GET_PRUEBA_FAILURE,

    //Buscar Club
    GET_VIAJES_REQUEST,
    GET_VIAJES_SUCCESS,
    GET_VIAJES_FAILURE,

} from '../action/prueba';

export default (
    state = {
        //Obtener un Club
        isFetchingPrueba: false,
        pruebaFetched: false,
        fetchPruebaError: false,
        prueba: {},

        //Obtener Viajes
        isFetchingViajes: false,
        viajesFetched: false,
        fetchViajesError: false,
        viajes: {},
    },
    action
) => {
    switch (action.type) {
        //Busqueda de todos los Clubes
        case GET_PRUEBA_REQUEST:
            return {
                ...state,
                isFetchingPrueba: true,
                fetchPruebaError: false,
            }
        case GET_PRUEBA_SUCCESS:
            return {
                ...state,
                isFetchingPrueba: false,
                pruebaFetched: true,
                prueba: action.prueba,
            }
        case GET_PRUEBA_FAILURE:
            return {
                ...state,
                pruebaFetched: false,
                fetchPruebaError: true,
            }

        //Busqueda de todos los Clubes
        case GET_VIAJES_REQUEST:
            return {
                ...state,
                isFetchingViajes: true,
                fetchPruebaError: false,
            }
        case GET_VIAJES_SUCCESS:
            return {
                ...state,
                isFetchingViajes: false,
                viajesFetched: true,
                viajes: action.viajes,
            }
        case GET_VIAJES_FAILURE:
            return {
                ...state,
                viajesFetched: false,
                fetchPruebaError: true,
            }

        default:
            return state;
    }
};