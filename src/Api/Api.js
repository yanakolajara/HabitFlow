import Axios from './axios'

async function getAllUsers(){
    try {
        const allUsers = await Axios.get('/users')
        return allUsers;
    } catch (error) {
        return error
    }
}

async function getAllHabits(){
    
}

export {
    getAllUsers,
}