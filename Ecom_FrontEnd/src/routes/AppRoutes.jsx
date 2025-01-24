import React from 'react'
import { Route,Routes } from 'react-router'
import App from '../App'
import AddCustomer from '../Components/AddCustomer'
import CustomerList from '../Components/CustomerList'
import UpdateCustomer from '../Components/UpdateCustomer'


export const AppRoutes = () => {
  return (
  <Routes>
      <Route  path='/' element={<App/>}/>
      <Route path='register' element={<AddCustomer/>}/>
      <Route path='view' element={<CustomerList/>}/>
      <Route path= '/update/:id' element={<UpdateCustomer/>}/>
  </Routes>
  )
}
