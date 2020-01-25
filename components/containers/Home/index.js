import { useState } from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import * as operations from '../../../store/operations';
import List from '../../UI/List/List';
import Title from '../../UI/Title/Title';
import InputSearch from '../../UI/InputSearch/InputSearch';

const Home = ({products, isLoading, sortByName, sortByNumber, searchByName, loadData}) => {
  const loading = "Loading...";
  const section = "Products";
  const nameKey = "name";
  const priceAvgAmazonKey = "avg_price_amazon";
  const priceAvgCarethyKey = "avg_price_carethy";

  const [name, setName] = useState(`-${nameKey}`);
  const [priceAvgCarethy, setPriceAvgCarethy] = useState(`-${priceAvgCarethyKey}`);
  const [priceAvgAmazon, setPriceAvgAmazon] = useState(`-${priceAvgAmazonKey}`);

  const sort = (key) => {
    const isReverted = key[0] !== '-';
    if (key.includes(nameKey)) {
      setName((isReverted ? '-':'') + nameKey);
      sortByName(name);
    }
    if (key.includes(priceAvgAmazonKey))  {
      setPriceAvgAmazon((isReverted ? '-': '') + priceAvgAmazonKey);
      sortByNumber(priceAvgAmazon);
    }
    if (key.includes(priceAvgCarethyKey))  {
      setPriceAvgCarethy((isReverted ? '-': '') + priceAvgCarethyKey);
      sortByNumber(priceAvgCarethy);
    }
  };

  const onSearch = (name) => {
    searchByName(name);
  };

  const sortByTitle = () => {
    sort(name);
  };

  const sortByPriceAvgCarethy = () => {
    sort(priceAvgCarethy);
  };
  
  const sortByPriceAvgAmazon = () => {
    sort(priceAvgAmazon);
  };

  const onReset = () => {
    loadData();
  };

  return (
    <Fragment>
      <Title text={section} isBold={true} centered={true} />
      <InputSearch placeholder="Search a product !" onSearch={onSearch} onReset={onReset} />
      {isLoading ? 
        <Title text={loading} isBold={true} centered={true} /> : 
        <Fragment>
          <List 
            list={products} 
            sortByName={sortByTitle} 
            sortByPriceCarethy={sortByPriceAvgCarethy} 
            sortByPriceAvgAmazon={sortByPriceAvgAmazon} />
        </Fragment>
      }
    </Fragment>
  )
};

Home.propTypes = {
  products: PropTypes.array.isRequired,
  loadData: PropTypes.func,
  isLoading: PropTypes.bool,
  sortByNumber: PropTypes.func.isRequired,
  sortByName: PropTypes.func.isRequired,
  searchByName: PropTypes.func.isRequired,
};

Home.defaultProps = {
  isLoading: false,
  loadData: () => {}
};

Home.getInitialProps = async ({store}) => {
  await store.dispatch(operations.getData());
  return {};
};

export default Home;