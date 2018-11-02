import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import About from './About'
import Accessories from './Accessories'
import IndividualAccessory from './IndividualAccessory'
import Shirts from './Shirts'
import Pants from './Pants'
import Shoes from './Shoes'
import NotFound from './NotFound'

const Router = () => (
  <BrowserRouter>
	  <Switch>
    	<Route exact path="/" render={() => <App />} />
      <Route exact path="/about" render={() => <About />} />
			{/* <Route path="/accessories/:name" component={IndividualAccessory} /> */}
			<Route path="/accessories/:name" render={props => <IndividualAccessory {...props}/>} />
			<Route path="/accessories/" render={props => <Accessories {...props} />} />
			<Route path="/shirts/:name" component={Shirts} />
			<Route path="/shirts/" component={Shirts} />
			<Route path="/pants:name/" component={Pants} />
			<Route path="/pants/" component={Pants} />
			<Route path="/shoes/:name" component={Shoes} />
			<Route path="/shoes/" component={Shoes} />
			<Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
