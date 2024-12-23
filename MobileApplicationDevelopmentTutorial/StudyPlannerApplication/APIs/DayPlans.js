export const createDayPlans = async (payload) =>{
    const dayPlan  = fetch(`http://localhost:8000/dayPlans`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(payload)
    })
    .then(respond => {return respond.status})
    .catch(err => console.log(err))
    return dayPlan
}

export const getDayPlans = async () =>{
    const userData  = fetch(`http://localhost:8000/dayPlans`)
    .then(response => response.json())
    .then(data =>{ return data})
    .catch(err => console.log(err))
    return userData
}

export const getDayPlansById = async (id) =>{
    const dayPlan  = fetch(`http://localhost:8000/dayPlans/${id}`)
    .then(response => response.json())
    .then(data =>{ return data})
    .catch(err => console.log(err))
    return dayPlan
}

export const updateDayPlansById = async (id, payload) =>{
    console.log(payload)
    const dayPlan  = fetch(`http://localhost:8000/dayPlans/${id}`,{
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data =>{ return data})
    .catch(err => console.log(err))
    return dayPlan
}

export const deleteDayPlansById = async (id) =>{
    const dayPlan  = fetch(`http://localhost:8000/dayPlans/${id}`,{
        method:'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data =>{ return data})
    .catch(err => console.log(err))
    return dayPlan
}