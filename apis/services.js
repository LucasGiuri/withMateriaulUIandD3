import axios from 'axios';

const BASE_API = 'https://swapi.co/api/';
const PEOPLE_API = `${BASE_API}people/`;
const PEOPLE_SEARCH_API = `${PEOPLE_API}?search=`;

export const charactersFetch = (url) => axios.get(url ? url : PEOPLE_API).then(response => response.data);
export const searchCharactersByName = (name) => axios.get(PEOPLE_SEARCH_API + name).then(response => response.data);
export const getCharacter = (id) => axios.get(PEOPLE_API + id).then(response => response);