import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import injectContext from './store/appContext'

function App() {
  return (
    <Layout />
  )
}

export default injectContext(App)
