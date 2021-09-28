import React from 'react'
import Writenote from '../WriteNote/Writenote'



const Editnote = (props) => {
 
const note = props.location.state.note
 
    return (
        <Writenote privacy={note.private} editing={true} initialTitle={note.title} initialContent={note.content} id={note._id} />
    )
}

export default Editnote