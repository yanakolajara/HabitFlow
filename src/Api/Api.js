import Axios from './axios'

async function getAllUsers(){
    try {
        const allUsers = await Axios.get('/users')
        return allUsers;
    } catch (error) {
        return error
    }
}

async function createNewUser(first_name, last_name, dob_day, dob_month, dob_year, gender, email, password){
    try {
        const newUser = await Axios.post('/users',{
            first_name: first_name,
            last_name: last_name,
            dob_day: dob_day,
            dob_month: dob_month,
            dob_year: dob_year,
            gender: gender,
            email: email,
            password: password
        })
        return newUser
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

async function getHabitStats(userId, habitId){
    try {
        const habitStats = await Axios.get(`/users/${userId}/habits/stats/${habitId}`)
        return habitStats
    } catch (error) {
        return error;
    }
}

async function createHabitStats(user_id, habit_id, day, month, year, completion, progress){
    try {
        const newStat = await Axios.post(`/users/${user_id}/habits/stats/${habit_id}`, {
            "day": day,
            "month": month,
            "year": year,
            "completion": completion,
            "progress": progress
        })
        return newStat
    } catch (error) {
        return error;
    }
}

export {
    getAllUsers,
    createNewUser,
    login,
    verifyToken,
    checkUserHabits,
    getAllHabits,
    addHabitToUser,
    getHabitStats,
    createHabitStats
}