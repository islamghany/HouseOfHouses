import * as React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Signin from './pages/Signin';
import User from './pages/User';
import Signup from './pages/Signup';
import {ThemeProvider} from 'styled-components';
import {theme} from 'Style';
const App:React.FC = ()=>{
	return <ThemeProvider theme={theme}>
	 <div>
	  <Router>
	  <Switch>
	  <Route path="/Listing:id" component={Listing} />
	  <Route path="/signup" component={Signup} />
	  <Route path="/signin" component={Signin} />
	  <Route path="/profile" component={User} />
	  <Route path="/" component={Home} />
	  </Switch>
	  </Router>
	</div>
	</ThemeProvider>
}
export default App;