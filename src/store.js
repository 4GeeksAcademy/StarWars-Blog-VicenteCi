export const initialStore = () => {
  return {
    message: null,
    favorites: [],
    personajes: [],
    personaje: null,
    planetas: [],
    planeta: null,
    vehiculos: [],
    vehuiculo: null
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'actualizar_favoritos': 
      return {
        ...store,
        favorites: action.payload
      };

    case 'guardar_personajes': 
      return {
        ...store,
        personajes: action.payload
      };

    case 'guardar_personaje': 
      return {
        ...store,
        personaje: action.payload
      };

    case 'guardar_planetas': 
      return {
        ...store,
        planetas: action.payload
      };

    case 'guardar_planeta': 
      return {
        ...store,
        planeta: action.payload
      };

    case 'guardar_vehiculos': 
      return {
        ...store,
        vehiculos: action.payload
      };

    case 'guardar_vehiculo': 
      return {
        ...store,
        vehiculo: action.payload
      };

    default:
      return store; // 
  }
}