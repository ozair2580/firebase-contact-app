import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createGlobalStyle } from 'styled-components'
import Context from './Context/Context.jsx'

const GlobalStyle=createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  background-color: #2e2c2c;
}
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <GlobalStyle/>
    <App />
    </Context>
  </React.StrictMode>,
)
