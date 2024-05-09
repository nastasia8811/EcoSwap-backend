import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/api';

///action/findOne

export const REGISTER_USER = `/customers`;
export const LOGIN_USER = `/customers/login`;
export const GET_USER = `/customers/customer`;
