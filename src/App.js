import React from 'react';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
// ROUTES
import Routes from './Routes/Routes';
// COMPONENTS
import Footer   from './components/Footer/Footer';
import Header   from './components/Header/';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
          <Routes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
