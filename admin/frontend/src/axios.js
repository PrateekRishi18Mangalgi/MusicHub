import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:1001', // Backend URL
    withCredentials: true, // For handling cookies
});

export default instance;
