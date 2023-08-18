import Axios from './axios'

async function getAllUsers(){
    try {
        const allUsers = await Axios.get('/users')
        return allUsers;
    } catch (error) {
        return error
    }
}

async function login(email, password){
    try {
        const user = await Axios.post('/users/login', {
            email: email,
            password: password
        })
        return user
    } catch (error) {
        return error
    }
}

export {
    getAllUsers,
    login
}