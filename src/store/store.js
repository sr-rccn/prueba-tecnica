/**
 * El store creado por Redux a partir del reductor raiz, el cual tendra todos 
 * los estados de la aplicacion, exceptuando los estilos.
 * 
 * El store 'original' nunca debe ser modificado por un reductor, siempre se debe cumplir la
 * propiedad de inmutabilidad (se devuelve un nuevo store modificado).
 */

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunkMiddleware from "redux-thunk";

import { getAllPrueba, getAllViajes } from "../action/prueba";

export default function configureStore(persistedState) {
    const store = createStore(
      rootReducer,
      persistedState,
      applyMiddleware(thunkMiddleware)
    );

    //Se cargan los datos
    store.dispatch(getAllPrueba());
    store.dispatch(getAllViajes());

    return store;
}
