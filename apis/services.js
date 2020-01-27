import axios from 'axios';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  }
};

const BASE_API = "https://shalion-challenge.s3.us-east-2.amazonaws.com/shalion_201912211354_revlonprices_short.json";

export const getProducts = () => axios.get(BASE_API, config).then(response => response.data);