
import React from 'react'
import { Row } from 'react-bootstrap'
import './phonefooter.scss'
import { Button } from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from "react-redux";
import {writeNote} from '../../redux/notes/notes.actions'

const PhoneFooter = ({toggleSidebar, SidebarMobile}) => {
    const dispatch = useDispatch()
    const writeNoteState = useSelector((state => state.notes.writeNote))
    const editNoteState = useSelector((state => state.notes.editNote))
    return (
        <Row className={`phone-footer sticky-bottom ${writeNoteState || editNoteState.editingNote === true ? 'd-none' : ''} `}>
           <div className={`phone-footer-contents ${SidebarMobile ? 'dull-page' : ''}`}>
             <MenuIcon className='phone-footer-icon' onClick={toggleSidebar}/>
             <Button className="phone-footer_button" onClick={() => {
                 dispatch(writeNote())
             }}>
                <span style={{
                    padding: '0px 3px'
                }}>
                    <AddIcon />
                </span>
                New
            </Button>
            <SearchIcon className='phone-footer-icon phone-footer-search-icon'/>
           </div>
        </Row>
    )
}


export default PhoneFooter