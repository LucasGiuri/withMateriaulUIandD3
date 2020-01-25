import * as productsSelectors from './products/selectors';

export const getAllProducts = (state) => productsSelectors.getAllProducts(state.products);
export const isLoadingProducts = (state) => productsSelectors.isLoadingProducts(state.products);
export const getDashboardProducts = (state) => productsSelectors.getDashboardProducts(state.products);