import React, {Component} from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Main from './Components/Layouts/Main';
import Cftv from './Components/Layouts/Cftv';
import About from './Components/Layouts/About';
import Cars from './Components/Layouts/Cars';
import Rolling from './Components/Layouts/Rolling';
import Small from './Components/Layouts/Small';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/CycleFeverTv' component={Cftv} />
            <Route path='/CarsTv' component={Cars}/>
            <Route path='/RollingChannel' component={Rolling} />
            <Route path='/SmallTownAmerica' component={Small} />
            <Route path='/About' component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
