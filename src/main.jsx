import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FormularioProvide } from './context/FormularioProvide'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FormularioProvide>
    <App />
    </FormularioProvide>
)
