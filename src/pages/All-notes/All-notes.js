import React from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import{ socket} from '../../services/socket'
import Notes from '../../components/Notes/Notes'
import { useSelector } from "react-redux";
import Sidebar from '../../components/Sidebar/Sidebar'
import Writenote from '../../components/WriteNote/Writenote'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './All-notes.scss'
import PhoneFooter from '../../components/phonefooter/phonefooter'

const Allnotes = ({pathname}) => {
    console.log(pathname)
    const currentUser = useSelector((state) => state.user.currentUser)
    let currentNotes = useSelector((state) => state.notes.currentNotes.notes)
    
    const newpathname = pathname.slice(1);
 
   
    return (
        <>
            
         <Notes Notes={currentNotes} page={newpathname} PageIcon={LibraryBooksIcon} token={currentUser.token}/>
           
        </>
    )
}


export default  Allnotes