import axios from 'axios';
axios.defaults.baseURL = 'https://eu-central-1.aws.data.mongodb-api.com/app/data-lembu/endpoint/data/v1';





export const REGISTER_USER = `/customers`;
export const LOGIN_USER = `/customers/login`;
export const GET_USER = `/customers/customer`;



export const GET_ALL_PRODUCTS = `/products`;
export const GET_ALL_PRODUCTS_URL = `/products/filter`

/* export const GET_ALL_PRODUCTS_PAGINATION = `/products/filter?brand=HP%2CLenovo%2C&perPage=3&startPage=1` */
export const GET_ALL_PRODUCTS_PAGINATION = `/products/filter?&perPage=3&startPage=1`

export const SEARCH_PRODUCTS = `/products/search`;
export const FILTERED_PRODUCTS = `/products/filter?`;
export const FILTERS = `/filters`;
export const UPDATE_FILTERS = `/filters/:id`;
export const GET_FILTERS_BY_TYPE = `/filters/:type`;

export const GET_DETAILS_PRODUCT = `/products/:itemNo`;
export const GET_PRODUCT_COMMENTS = `/comments/product/:itemNo`;
export const PRODUCT_COMMENTS = `/comments`;





