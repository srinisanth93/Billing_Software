import React from 'react'
import SideBarRow from './SideBarRow'
import './SideNavBar.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HomeIcon from '@mui/icons-material/Home';
function SideNavBar() {
  return (
    <div className='sidebar'>
        <SideBarRow selected title="Home" Icon={HomeIcon}/>
        <SideBarRow title="Order" Icon={BorderColorIcon}/>
        <SideBarRow title="Delivery" Icon={LocalShippingIcon}/>
        <SideBarRow title="about" Icon={HomeIcon}/>
        {/* <hr></hr> */}
   </div>
  )
}

export default SideNavBar