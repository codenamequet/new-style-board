import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Accessories from './Accessories'
import Shirts from './Shirts'
import Pants from './Pants'
import Shoes from './Shoes'
import NotFound from './NotFound'

const Router = () => (
  <BrowserRouter>
	  <Switch>
      <Route exact path="/" component={App} />
			<Route path="/accessories/" component={Accessories} />
			<Route path="/accessories/:name" component={Accessories} />
			<Route path="/shirts/" component={Shirts} />
			<Route path="/shirts/:name" component={Shirts} />
			<Route path="/pants/" component={Pants} />
			<Route path="/pants:name/" component={Pants} />
			<Route path="/shoes/" component={Shoes} />
			<Route path="/shoes/:name" component={Shoes} />
			<Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
