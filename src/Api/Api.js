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

async function verifyToken(token){
    try {
        const user = await Axios.get(`/users/verify-token/${token}`)
        return user
    } catch (error) {
        return error
    }
}

async function checkUserHabits(id){
    try {
        const userHabits = Axios.get(`/users/${id}/habits`);
        return userHabits;
    } catch (error) {
        return error
    }
}




export {
    getAllUsers,
    login,
    verifyToken,
    checkUserHabits
}