import React from 'react'
import "./Header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { NotificationAdd } from '@mui/icons-material';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
function Header() {
  return (
    <div>
      <div className='header_main'>
        <div className='header_left'>
          <p><AccountBalanceIcon /></p>
          <p>Billling</p>
        </div>
        <div className='header_center'>
          
         <p><input className='header_search' type={"search"} placeholder={"search bill"}></input></p>
   
        </div>
        <div className='header_right'>
          <p><NotificationAdd /></p>
          <p><SettingsApplicationsIcon /></p>
          <p><AccountCircleIcon /></p>
        </div>
      </div>






    </div>
  )
}

export default Header