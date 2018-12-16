import React, { Component,Fragment } from 'react';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Main from './Components/Layouts/Main';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
