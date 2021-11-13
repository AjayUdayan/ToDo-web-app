import axios from "axios"

const baseUrl = `https://api-nodejs-todolist.herokuapp.com`

const getHeaders = () => {
    return {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json",
    }
}

export const ADD_TASK = (newTask) => {
    let url = `${baseUrl}/task`
    return async dispatch => {
        try {
            let res = await axios.post(url, newTask, { headers: getHeaders() })
            console.log(res.data)
            dispatch(GET_ALL_TASK())
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
        }
    }
}





// GET_ALL_TASK

export const GET_ALL_TASK = () => {
    let url = `${baseUrl}/task`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            dispatch({
                type: "GET_ALL_TASK",
                payload: res.data?.data
            })
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
        }
    }
}


export const UPDATE_TASK = (taskId,updateTask) => {
    let url = `${baseUrl}/task/${taskId}`
    return async dispatch => {
        try {
            let res = await axios.put(url, updateTask, { headers: getHeaders() })
            console.log(res.data)
            dispatch(GET_ALL_TASK())
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
        }
    }
}

export const DELETE_TASK = (taskId) =>{
    let url = `${baseUrl}/task/${taskId}`
    return async dispatch => {
        try {
            let res = await axios.delete(url, {headers : getHeaders() })
            console.log(res.data)
            dispatch(GET_ALL_TASK())
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))           
        }
    }
}