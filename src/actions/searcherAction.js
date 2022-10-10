import {
  CAMBIAR_SEARCHER,
  CAMBIAR_SEARCHER_EXITO,
  CAMBIAR_SEARCHER_ERROR,
  OBTENER_DATOS,
  OBTENER_DATOS_EXITO,
  OBTENER_DATOS_ERROR,
} from "../types";

export function cambiarSearcherAction(nombre) {
  return (dispatch) => {
    dispatch(cambiarSearcher());

    try {
      dispatch(cambiarSearcherExito(nombre));
    } catch (error) {
      dispatch(cambiarSearcherError(true));
    }
  };
}

const cambiarSearcher = () => ({
  type: CAMBIAR_SEARCHER,
});
// si se escribe algo valido
const cambiarSearcherExito = (nombre) => ({
  type: CAMBIAR_SEARCHER_EXITO,
  payload: nombre,
});

// si no se escribe algo valido
const cambiarSearcherError = (estado) => ({
  type: CAMBIAR_SEARCHER_ERROR,
  payload: estado,
});

export function obtenerDatos() {
  return (dispatch) => {
    dispatch(obtener());
    try {
      dispatch(obtenerExito());
    } catch (error) {
      dispatch(obtenerError(true));
    }
  };
}

const obtener = () => ({
  type: OBTENER_DATOS,
  payload: true,
});

// si se escribe algo valido
const obtenerExito = () => ({
  type: OBTENER_DATOS_EXITO,
});

// si no se escribe algo valido
const obtenerError = (estado) => ({
  type: OBTENER_DATOS_ERROR,
  payload: estado,
});
