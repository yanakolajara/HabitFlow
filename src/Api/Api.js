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
        const userHabits = await Axios.get(`/users/${id}/habits/user-habits`);
        return userHabits;
    } catch (error) {
        return error
    }
}

async function getAllHabits(){
    try {
        const allHabits = await Axios.get('/habits')
        return allHabits;
    } catch (error) {
        return error
    }
}

async function addHabitToUser(userId, habitId){
    try {
        const habitToUser = await Axios.post(`/users/${userId}/habits/user-habits/${habitId}`)
        return habitToUser;
    } catch (error) {
        return error
    }
}


export {
    getAllUsers,
    login,
    verifyToken,
    checkUserHabits,
    getAllHabits,
    addHabitToUser
}