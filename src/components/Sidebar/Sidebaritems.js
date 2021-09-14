import React from 'react'
import { Link } from 'react-router-dom'



const Sidebaritem = ({ Icon,  text, active }) => {
   const path = active.split('/')[1]
   
    return (
        <Link to={`/${text}`} style={{
            textDecoration: 'none'
        }}>
          <div className='sidebar-item'>
           
                <div className={`${path === text && 'activesidebar-item'} d-flex`}>
           
                 <Icon />
           
                <p>
                {text}
                </p>
                </div>
            </div>
        </Link>
    )
}


export default Sidebaritem