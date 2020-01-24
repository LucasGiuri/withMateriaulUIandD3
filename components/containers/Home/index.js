import { useState } from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import * as operations from '../../../store/operations';
import List from '../../UI/List/List';
import Title from '../../UI/Title/Title';
import InputSearch from '../../UI/InputSearch/InputSearch';

const Home = ({products, isLoading, sortBySomething, searchByName, loadData}) => {
  const loading = "Loading...";
  const section = "Products";
  const nameKey = "name";
  const priceAvgAmazonKey = "avg_price_amazon";

  const [name, setName] = useState(`-${nameKey}`);
  const [priceAvgAmazon, setPriceAvgAmazon] = useState(`-${priceAvgAmazonKey}`);

  const onSearch = (name) => {
    searchByName(name);
  };

  const sortByPriceAvgAmazon = () => {
    if (priceAvgAmazon[0] !== "-") {
      setPriceAvgAmazon(`-${priceAvgAmazonKey}`);
    }
    else {
      setPriceAvgAmazon(priceAvgAmazonKey)
    }
    sortBySomething(priceAvgAmazon);
  };

  const sortByName = () => {
    if (name[0] !== "-") {
      setName(`-${nameKey}`);
    }
    else {
      setName(nameKey)
    }
    sortBySomething(name);
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
          <List list={products} sortByName={sortByName}  sortByPriceAvgAmazon={sortByPriceAvgAmazon} />
        </Fragment>
      }
    </Fragment>
  )
};

// Home.propTypes = {
//   characters: PropTypes.array.isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   total: PropTypes.number,
//   nextPage: PropTypes.string,
//   prevPage: PropTypes.string,
//   loadMore: PropTypes.func.isRequired,
//   searchByName: PropTypes.func.isRequired,
// };

// Home.defaultProps = {
//   total: 1,
//   nextPage: '',
//   prevPage: ''
// };

Home.getInitialProps = async ({store}) => {
  await store.dispatch(operations.getData());
  return {};
};

export default Home;