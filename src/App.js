import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Component} from 'react';
import Navbar from './Components/layout/navbar';
import Dashboard from './Components/dashboard/Dashboard';
import ProjectDetails from './Components/projects/ProjectDetails';
import SignIn from './Components/auth/signIn';
import signUp from './Components/auth/signUp';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={signUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
