import axios from 'axios';

const sirfUrl = axios.create({
    baseURL: 'http://localhost:4000/api/events',
    proxy: false
});

export default sirfUrl;