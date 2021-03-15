import axios from 'axios';

const LOGIN_URL = "http://127.0.0.1:8000/api/login/";

export function login(username, password) {
    return axios.post(LOGIN_URL, {username, password});
}
