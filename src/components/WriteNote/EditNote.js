import React from 'react'
import Writenote from './Writenote'



const EditNote = ({privacy, note}) => {
    return (
        <Writenote privacy={privacy} editing={true} initialTitle={note.title} initialContent={note.content} id={note._id} />
    )
}

export default EditNote