import axios from 'axios';

const LOGIN_URL = "http://tech.sheridan.on.ca/capstone/robot/user/login";

export function login(id, password) {
    return axios.post(LOGIN_URL, {id, password});
}