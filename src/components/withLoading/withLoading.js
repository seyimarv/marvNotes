import React, {useState} from 'react'

import { CircularProgress } from '@material-ui/core';
import './withLoading.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Box, ClickAwayListener } from '@material-ui/core';
import PhoneFooter from '../phonefooter/phonefooter';
import '../../pages/All-notes/All-notes.scss'


const WithLoading = ({ isLoading, Component, pathname, favorites, note, history, page, searchQuery, searchNoteResults, setSearchNotesResults }) => {

  const [SidebarMobile, setSidebarMobile] = useState(false)

  const toggleSidebar = () => {
    setSidebarMobile(!SidebarMobile)
    

  }
  const handleClickAway = () => {
    setSidebarMobile(false)
  };

  return (

    <>
      <ClickAwayListener onClickAway={handleClickAway} >
        <Box sx={{ m: -2 }} className="sidebar_box">
          <PhoneFooter toggleSidebar={toggleSidebar} SidebarMobile={SidebarMobile} page={page} />

          <div className={`sidebar-displaymobile nodisplay_desktop ${SidebarMobile === true ? 'sidebar_open' : ''} `}>
            <Sidebar path={pathname} history={history} handleClickAway={handleClickAway} />
          </div>
        </Box>
      </ClickAwayListener>
      {
        isLoading ?
          <div className="with-loading">
            <CircularProgress value="M" />
          </div> :
          <Component pathname={pathname}
            setSearchNotesResults={setSearchNotesResults}
                         searchNoteResults={searchNoteResults}
           favorites={favorites} note={note}
            history={history} searchQuery={searchQuery}/>
      }

    </>
  )
}


export default WithLoading