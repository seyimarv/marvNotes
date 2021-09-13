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

const Sidebar = ({path, history}) => {
    const currentUser = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            <h6>{currentUser.userName}</h6>
            <Button className="sidebar_button mb-4">
                <span style={{
                    padding: '0px 5px'
                }}>
                    <AddIcon />
                </span>
                New
            </Button>
           
            <Sidebaritem Icon={LibraryBooksIcon} active={path} text="All Notes" />
            <Sidebaritem Icon={MenuBookIcon} icon='' active={path} text="My Notes" />
            <Sidebaritem Icon={StarsIcon}   active={path} text="Favorites"  />
            <Button className="sidebar-logout" onClick={() => {
                logoutCheck(logout, dispatch, history)
            }} style={{
                color: "white"
            }}>
                <span style={{
                    padding: '0px 5px'
                }}>
                    <ExitToAppIcon />
                </span>
                Log out</Button>

            <div className="sidebar_footer d-flex">
                <span style={{
                    padding: '0px 5px'
                }}>
                    <CopyrightIcon />
                </span>
                <p>Seyimarv</p>
            </div>
        </div>
    )
}


export default Sidebar