import axios from 'axios';

const BASE_API = 'https://shalion-challenge.s3.us-east-2.amazonaws.com/shalion_201912211354_revlonprices_short.json';
export const getProducts = () => axios.get(BASE_API).then(response => response.data);