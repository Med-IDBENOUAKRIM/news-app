import axios from 'axios';

const URL__API = 'https://newsapi.org/v2';

export const instance = axios.create({
    baseURL: URL__API
})