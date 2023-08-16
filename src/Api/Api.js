import Axios from './axios'

async function getAllUsers(){
    try {
        const allUsers = Axios.get('/users')
        return allUsers;
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllUsers,
}