import * as productsSelectors from './products/selectors';

export const getAllProducts = (state) => productsSelectors.getAllProducts(state.products);
export const isLoadingProducts = (state) => productsSelectors.isLoadingProducts(state.products);
// export const getCharacterById = (state) => charactersSelectors.getCharacterById(state.characters);
// export const getTotalCharacters = (state) => charactersSelectors.getTotalCharacters(state.characters);
// export const getCharactersNextPage = (state) => charactersSelectors.getCharactersNextPage(state.characters);
// export const getCharactersPreviousPage = (state) => charactersSelectors.getCharactersPreviousPage(state.characters);