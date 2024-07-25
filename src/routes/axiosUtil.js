import axios from 'axios';

export const axiosUtil = axios.create({
    baseURL: `http://localhost:5001/api/v1/`
});