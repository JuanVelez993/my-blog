import { configureStore } from "@reduxjs/toolkit";
import portafolioReducer from './features/portafolioSlice'

//aqui se generan los reducers que vaya a tener la aplicacion
export const store = configureStore({
    reducer: {
        //se declara dentro del reducer del store
        portafolio: portafolioReducer,
    },
});

//rootstate es el estado de la aplicacion desde el store
export type RootState = ReturnType<typeof store.getState>;
//se usa para los dispatch todo esto es estandar menos el numero de reducers
export type AppDispatch = typeof store.dispatch;