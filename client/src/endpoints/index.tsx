import axios from 'axios';
axios.defaults.baseURL = 'https://eu-central-1.aws.data.mongodb-api.com/app/data-lembu/endpoint/data/v1';

///action/findOne

export const REGISTER_USER = `/customers`;
export const LOGIN_USER = `/customers/login`;
export const GET_USER = `/customers/customer`;
