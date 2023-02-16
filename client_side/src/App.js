import Home from './Home/Home';
import React from 'react';
import './App.css';
import Header from './Header/Header';
import SideNavBar from './SideNavBar/SideNavBar';

function App() {
  return (
    <div className="App">
  <Header/>
  <div className='app_page'>
  <SideNavBar/>
  <Home/>
    </div>


  
    </div>
  );
}

export default App;
