import * as React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Listings from './pages/Listings';
import Signin from './pages/Signin';
import User from './pages/User';
import Signup from './pages/Signup';
import {ThemeProvider} from 'styled-components';
import {theme,GlobaStyle} from 'Style';
import Navbar from './containers/Navbar';
import AuthRoute from './helper/AuthRoute'

const App:React.FC = ()=>{
	return <ThemeProvider theme={theme}>
	 <GlobaStyle />
	 <div>
	  <Router>
	  <>
	  <Navbar />
	  <Switch>
	  <Route path="/Listing/:id" component={Listing} />
	  <AuthRoute path="/signin" type="guest" >
	   <Signin />
	  </AuthRoute>
	  <Route path="/listings" component={Listings} />
	  <Route path="/profile" component={User} />
	  <AuthRoute path="/profile" type="private" >
	   <User />
	  </AuthRoute>
	  <Route path="/" component={Home} />
	  <Route component={Signup} />
	  </Switch>
	  </>
	  </Router>
	</div>
	</ThemeProvider>
}
export default App;