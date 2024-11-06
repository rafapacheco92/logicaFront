import React, { useState } from 'react';
import Feed from './components/Feed/Feed';
import Notifications from './components/SideBar/Notifications/Notifications';
import Explore from './components/SideBar/Explore/Explore';
import EditProfile from './components/SideBar/EditProfile/EditProfile';
import BarBot from './components/SideBar/BarBot/BarBot';
import Home from './components/Home/Home';

function App() {
  
  return (
    
    <>
      <Home />
      <Feed />
      <Notifications />
      <Explore />
      <EditProfile />
      <BarBot />
    </>
  );
}

export default App;
