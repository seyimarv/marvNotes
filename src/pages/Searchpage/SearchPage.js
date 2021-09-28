
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { fetchCurrentNotes, filterSearchResults } from '../../redux/notes/notes.actions'
import WithLoading from '../../components/withLoading/withLoading'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../../components/Sidebar/Sidebar'
import Search from './search'
import { fetchSearchNotes } from '../../services/notes';


import './SearchPage.scss'

const SearchPage = (props) => {
    const SearchedNotesWithContent = useSelector((state) => state.notes.SearchedNotes.notesWithContent)
    const SearchedNotesWithTitle = useSelector((state) => state.notes.SearchedNotes.notesWithTitle)
    const [searchNoteResults, setSearchNotesResults] = useState([...SearchedNotesWithContent, ...SearchedNotesWithTitle])
   
    const searchLoading = useSelector((state) => state.notes.SearchedNotes.isLoading)
    const isLoading = useSelector((state) => state.notes.currentNotes.isLoading)
    const currentUser = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch()
   
    let searchQuery = props.location.search.slice(1)

    


    const getSearchResults = async () => {
        dispatch(fetchCurrentNotes({ isLoading: true, notes: [] }))
        const SearchResults = await fetchSearchNotes(currentUser.token)
        setTimeout(() => {
            if (SearchResults) {
                dispatch(fetchCurrentNotes({ isLoading: false, notes: SearchResults.searchResults }))
                dispatch(filterSearchResults({
                    notes: SearchResults.searchResults,
                    searchQuery: searchQuery,
                    searchLoading: searchLoading
                }))  
            } else {
                dispatch(fetchCurrentNotes({ isLoading: false, notes: [] }))
            }
           
        }, 500)

    }



    useEffect(() => {
        getSearchResults()

    }, [])


   

    return (
        <>
            <Container fluid className="searchpage_container p-0">
                <Row className='no-gutters'>
                    <Col lg={2} className=" sidebar-display">
                        <div className=''>
                            <Sidebar path={props.location.pathname} history={props.history} />
                        </div>
                    </Col>
                    <Col lg={10} className="search-page_column">

                        <WithLoading Component={Search}
                            pathname={props.location.pathname}
                            history={props.history}
                            isLoading={isLoading}
                            searchQuery={searchQuery}
                            setSearchNotesResults={setSearchNotesResults}
                            searchNoteResults={searchNoteResults} 
                        
                            />
                    </Col>

                </Row>
            </Container>

        </>
    )
}


export default SearchPage