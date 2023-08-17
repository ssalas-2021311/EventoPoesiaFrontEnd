import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from './App'
import { UserForm } from './formulario/components/UserForm'
// import { Formulario } from './formulario'

export const AppRoutes = () => {
  return (

    <Routes>
        <Route path='/' element={<App></App>}/>
        <Route path='UseForms' element={<UserForm></UserForm>} />
        
    </Routes>
  )
}