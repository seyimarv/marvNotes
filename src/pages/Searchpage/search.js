import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterSearchResults } from '../../redux/notes/notes.actions'
import { useSelector } from 'react-redux'
import SearchBar from '../../components/searchBar/searchBar';
import Note from '../../components/Notes/Note';
import { Container, Row} from 'react-bootstrap'

const Search = ({ searchQuery, searchNoteResults, setSearchNotesResults }) => {
    const currentNotes = useSelector((state) => state.notes.currentNotes.notes)
    const currentUser = useSelector((state) => state.user.currentUser)
    const SearchedNotesWithTitle = useSelector((state) => state.notes.SearchedNotes.notesWithTitle)
    const SearchedNotesWithContent = useSelector((state) => state.notes.SearchedNotes.notesWithContent)
    const isLoading = useSelector((state) => state.notes.SearchedNotes.isLoading)
    const [openedId, setOpenedId] = useState("")
    const dispatch = useDispatch()
     const [error, setErrorMessage] = useState('')
    useEffect(() => {
        if(!isLoading) {
            setSearchNotesResults([...SearchedNotesWithContent, ...SearchedNotesWithTitle])
        }
    }, [isLoading])
    
    useEffect(() => {
        dispatch(filterSearchResults({
            notes: currentNotes,
            searchQuery: searchQuery
        }))
  
        setSearchNotesResults([...SearchedNotesWithContent, ...SearchedNotesWithTitle])

      
    }, [searchQuery])
 
    
    return (
        <>
            <Container fluid className='p-0 my-2 search_page'>
                <header className="search-page_header">
                    <SearchBar value={searchQuery}  />
                </header>
                {
                    searchQuery && searchNoteResults.length ?
                        <Row className='search_results mx-2 mt-5'>
                            {

                                searchNoteResults.map(note => {
                                    return (

                                        <Note openedId={openedId} largeSize="3" setOpenedId={setOpenedId} note={note} currentUser={currentUser} dispatch={dispatch} />


                                    )

                                })
                            }
                        </Row> : !searchQuery ?  <h1>Enter something to search</h1> : <h1>No results for "{searchQuery}"</h1> 

                }
            </Container>
        </>
    )
}

export default Search