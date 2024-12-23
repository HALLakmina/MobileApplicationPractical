export const createCategory = async (payload) =>{
    const category  = fetch(`http://localhost:8000/category`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(payload)
    })
    .then(respond => {return respond.status})
    .catch(err => console.log(err))
    return category
}

export const getCategory = async () =>{
    const category  = fetch(`http://localhost:8000/category`)
    .then(response => response.json())
    .then(data =>{ return data})
    .catch(err => console.log(err))
    return category
}

export const getCategoryById = async (id) =>{
    const category  = fetch(`http://localhost:8000/category/${id}`)
    .then(response => response.json())
    .then(data =>{ return data})
    .catch(err => console.log(err))
    return category
}

export const updateCategoryById = async (id, payload) =>{
    const category  = fetch(`http://localhost:8000/category/${id}`,{
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data =>{ return data})
    .catch(err => console.log(err))
    return category
}

export const deleteCategoryById = async (id) =>{
    const category  = fetch(`http://localhost:8000/category/${id}`,{
        method:'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data =>{ return data})
    .catch(err => console.log(err))
    return category
}