import axios from 'axios';

const BASE_URL = 'https://myssticobackend.herokuapp.com/api'
const TOKEN = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).accessToken : null

// console.log("dasdasd",TOKEN)


export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const adminRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`bearer ${TOKEN}`}
})
