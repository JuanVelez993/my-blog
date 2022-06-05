import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import { store } from "./state/store";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*el provider debe recibir el store declarado en app como props*/}
    {/*de esta manera toda la aplicacion tiene acceso al store*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  
)
