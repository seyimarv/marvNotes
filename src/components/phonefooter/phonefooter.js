
import React from 'react'
import { Row } from 'react-bootstrap'
import './phonefooter.scss'
import { Button } from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from "react-redux";
import { writeNote } from '../../redux/notes/notes.actions'
import { Link } from 'react-router-dom';

const PhoneFooter = ({ toggleSidebar, SidebarMobile, page }) => {
    const dispatch = useDispatch()
    const writeNoteState = useSelector((state => state.notes.writeNote))
    const editNoteState = useSelector((state => state.notes.editNote))
    return (
        <div className={`phone-footer ${writeNoteState || editNoteState.editingNote === true ? 'd-none' : ''} `}>
            <div className={`phone-footer-contents ${SidebarMobile ? 'dull-page' : ''}`}>
                <MenuIcon className='phone-footer-icon' onClick={toggleSidebar} />
                {
                    page === 'nonew' ? null : 
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
                }

                <Link to='/Search'>
                <SearchIcon className='phone-footer-icon phone-footer-search-icon' />
                </Link>
            </div>
        </div>
    )
}


export default PhoneFooter