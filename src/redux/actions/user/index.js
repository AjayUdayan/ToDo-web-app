import axios from "axios"

const baseUrl = `https://api-nodejs-todolist.herokuapp.com`

const getHeaders = () => {
    return {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json",
    }
}

export const REGISTER_USER = (payload) => {
    let url = `${baseUrl}/user/register`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload)
            if (res.data?.user?.email === payload?.email) {
                localStorage.setItem('token', res.data?.token)
                localStorage.setItem('userId', res.data?.user?._id)
                alert('Registered & Logged in successfull !')
            } else {
                alert('Login failed !')
            }
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
        }
    }
}


export const LOGIN_USER = (loginData) => {
    let url = `${baseUrl}/user/login`
    return async dispatch => {
        try {
            let res = await axios.post(url, loginData)
            if (res.data?.user?.email === loginData?.email) {
                localStorage.setItem('token', res.data?.token)
                localStorage.setItem('userId', res.data?.user?._id)
                alert('Logged in successfully !')
            } else {
                alert('Login failed !')
            }
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
        }
    }
}



// export const USER_INFO = (user) => {
//     dispatch({
//         type:'USER_INFO',
//         payload:useru
//     })
// }
