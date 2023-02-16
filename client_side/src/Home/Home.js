import React from 'react'
import './Home.css'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import PendingIcon from '@mui/icons-material/Pending';
function Home() {
    return (
        <div className='home_main'>
            <div>
                <h2>Home</h2>
                <hr></hr>
            </div>
            <div className='home_in'>
                <div className='home_pending'>
                    <h3>Pending Works</h3>
                    <hr></hr>
                    <p></p>
                    <table>
                        <tr>
                            <td className='tableIcon'>
                                <PendingIcon />
                            </td>
                            <td> pending order</td>
                            <td className='value'> 1
                            </td>
                        </tr>
                        <tr>
                            <td className='tableIcon'>
                                <PendingActionsIcon />
                            </td>
                            <td>pending bill</td>
                            <td className='value'>
                                6
                            </td>
                        </tr>
                        <tr>
                            <td className='tableIcon'>
                                <AllInclusiveIcon />
                            </td>
                            <td>total amount pending</td>
                            <td className='value'>
                                Rs.20000
                            </td>
                        </tr>
                    </table>

                </div>
                <div className='home_start'>
                    <h3>Quick Start</h3>
                    <hr></hr>
                    <div className='row'>

                        <div className='home_start_row'>
                            <BorderColorIcon className='row1' />
                            <p className='p'>Create Order  </p>
                           
                        </div>
                        <div className='home_start_row'>
                            <PersonAddIcon className='row1' />
                            <p className='p'>Add User  </p>
                        </div>
                        <div className='home_start_row'>
                            <LocalShippingIcon className='row1' />
                            <p className='p'>Create Delivery  </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home