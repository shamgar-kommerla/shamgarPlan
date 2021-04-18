import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Component} from 'react';
import Navbar from './Components/layout/navbar';
import Dashboard from './Components/dashboard/Dashboard';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
