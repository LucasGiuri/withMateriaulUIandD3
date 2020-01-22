import * as charactersSelectors from './characters/selectors';

export const getAllCharacters = (state) => charactersSelectors.getAllCharacters(state.characters);
export const getCharacterById = (state) => charactersSelectors.getCharacterById(state.characters);
export const isLoadingCharacters = (state) => charactersSelectors.isLoadingCharacters(state.characters);
export const getTotalCharacters = (state) => charactersSelectors.getTotalCharacters(state.characters);
export const getCharactersNextPage = (state) => charactersSelectors.getCharactersNextPage(state.characters);
export const getCharactersPreviousPage = (state) => charactersSelectors.getCharactersPreviousPage(state.characters);