import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch, useSelector } from 'react-redux'
import './Sidebar.scss'
import { Button } from 'react-bootstrap'
import Sidebaritem from './Sidebaritems'
import { logout } from '../../services/auth'
import NotesIcon from '@material-ui/icons/Notes';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { logoutCheck } from '../../utils/Alerts.responses';
import StarsIcon from '@material-ui/icons/Stars';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Sidebar = ({path, history}) => {
    const currentUser = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            {/* <h6 className='sidebar_user-name'>{currentUser.userName}</h6> */}
            <h6 className="sidebar_logo">Marvienotes</h6>
        
                <p className="sidebar_button mb-3">
                   MENU
                </p>
           <div style={{
               paddingRight: '40px'
           }}>
            <Sidebaritem Icon={LibraryBooksIcon} active={path} text="All Notes"/>
            <Sidebaritem Icon={MenuBookIcon} icon='' active={path} text="My Notes" />
            <Sidebaritem Icon={StarsIcon}   active={path} text="Favorites"  />
            <Sidebaritem Icon={AccountCircleIcon}   active={path} text="Profile"  />
            </div>
          
            <div className='sidebar_footer'>
            <Button className="sidebar-logout" onClick={() => {
                logoutCheck(logout, dispatch, history)
            }} style={{
                color: "white",
            }}>
                <span style={{
                    padding: '0px 5px'
                }}>
                    <ExitToAppIcon />
                </span>
                Log Out</Button>

            <div className="sidebar_copyright d-flex">
                <span style={{
                    padding: '0px 5px'
                }}>
                    {/* <CopyrightIcon style={{
                        fontSize: '13px'
                    }}/> */}
                    <AccountCircleIcon />
                </span>
                <p>{currentUser.userName}</p>
            </div>
            </div>
        </div>
    )
}


export default Sidebar