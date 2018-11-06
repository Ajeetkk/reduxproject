import React, {Component} from 'react';
import Home from './components/Home';
import About from './components/About';
import history from './History'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class Routers extends Component{
    render(){
        return(
            <Router history={history}>
               <Switch>
                    <Route exact path="/" component={Home}> </Route>
                    <Route exact path="/About" component={About}> </Route>
                </Switch>
            </Router>
        )
    }
}
export default Routers;