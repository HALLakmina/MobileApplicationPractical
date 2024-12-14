export const createNote = async (payload=[],id) =>{
    const notesData  = fetch(`http://localhost:8000/users/${id}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({notesList:[...payload]})
    })
    .then(respond => {return respond.status})
    .catch(err => console.log(err))
    return notesData
}

export const getNotes = async (id) =>{
    console.log(id)
    const userData  = fetch(`http://localhost:8000/user/${id}`)
    .then(response => response.json())
    .then(data =>{ return data?.notes})
    .catch(err => console.log(err))
    return userData
}