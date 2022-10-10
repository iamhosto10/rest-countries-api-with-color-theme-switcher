import {
  CAMBIAR_SEARCHER,
  CAMBIAR_SEARCHER_EXITO,
  CAMBIAR_SEARCHER_ERROR,
  OBTENER_DATOS,
  OBTENER_DATOS_EXITO,
  OBTENER_DATOS_ERROR,
} from "../types";

// cada reducer tiene su propio state

const initialState = {
  searcher: "",
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_DATOS:
    case CAMBIAR_SEARCHER:
      return {
        ...state,
        loading: true,
      };
    case CAMBIAR_SEARCHER_EXITO:
      return {
        ...state,
        loading: false,
        searcher: action.payload,
      };
    case CAMBIAR_SEARCHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OBTENER_DATOS_EXITO:
      return {
        ...state,
        loading: false,
      };
    case OBTENER_DATOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
