


export const addNote = async (Values, token) => {
   try {
       const response = await fetch('http://localhost:8081/note/note', {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
           },
           body: JSON.stringify({
               title: Values.title,
               content: Values.content
           })
       })
       console.log(response)
       if (response.status === 401) {
        throw new Error(
            "Adding note failed"
        );
    }
    if (response.status !== 200 && response.status !== 201) {
        console.log('Error!');
        throw new Error('Adding note failed, check your network connection');
    }
    const noteData = await response.json()
    console.log(noteData)
    Values.title = ''
    Values.content = ''
   } catch(err) {
       console.log(err)
   }
}

export const fetchNotes = async (token) => {
    let notes
    try {
        const response = await fetch('http://localhost:8081/note/note', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        if (response.status !== 200 && response.status !== 201) {
            console.log('Error!');
            throw new Error('Fetching notes failed, check your network connection');
        }
        const fetchedNotes = await response.json()
        notes = fetchedNotes
        console.log(notes)
        return notes
    } catch(err) {
        console.log(err)
    }
}