export const checkUsers = async (payload) =>{
    const userData  = fetch(`http://localhost:8000/users`)
    .then(response => response.json())
    .then(data =>{ return data})
    .catch(err => console.log(err))
    return userData
}



export const createUsers = async (payload) =>{
    const userData  = fetch(`http://localhost:8000/users`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(payload)
    })
    .then(respond => {return respond.status})
    .catch(err => console.log(err))
    return userData
}

export const getUserById = async (id) =>{
    const userData  = fetch(`http://localhost:8000/users/${id}`)
    .then(response => response.json())
    .then(data =>{ return data})
    .catch(err => console.log(err))
    return userData
}