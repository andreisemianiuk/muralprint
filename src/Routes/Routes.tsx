import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Calendar from '../components/Calendar/Calendar'
import {
  BUSINESS_BOX_PATH,
  CALENDAR_PATH, CART_PATH,
  NOTEBOOK_PATH,
  PACKAGE_PATH,
  POSTAL_PATH,
} from './routesConstants/routesConstants'
import Main from '../components/Main/Main'
import Notebook from '../components/Notebook/Notebook'
import BusinessBox from '../components/BusinessBox/BusinessBox'
import Package from '../components/Package/Package'
import Cards from '../components/Cards/Cards'
import { Cart } from '../components/Cart/Cart'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={CALENDAR_PATH} render={() => <Calendar/>}/>
        <Route path={CART_PATH} render={() => <Cart/>}/>
        <Route path={NOTEBOOK_PATH} render={() => <Notebook/>}/>
        <Route path={BUSINESS_BOX_PATH} render={() => <BusinessBox/>}/>
        <Route path={POSTAL_PATH} render={() => <Cards/>}/>
        <Route path={PACKAGE_PATH} render={() => <Package/>}/>
        <Route path={'/'} render={() => <Main/>}/>
      </Switch>
    </>
  )
}

export default Routes