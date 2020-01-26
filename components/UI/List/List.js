import PropTypes from 'prop-types';
import { Grid, FiltersContainer, AvgFilter } from './List.styles';
import Title from '../Title/Title';
import Item from '../Item/Item';

const List = ({list, sortByName, sortByPriceCarethy, sortByPriceAvgAmazon}) => {
  const productName = "Product Name";
  const priceAVG = "Price AVG";
  const priceCarethy = "Price CARETHY";

  return (
    <Grid>
      <FiltersContainer>
        <span id="sortByName" onClick={sortByName}>{productName}</span>
        <AvgFilter>
          <span id="sortByAvgPriceCarethy" onClick={sortByPriceCarethy}>{priceCarethy}</span>
          <span id="sortByAvgPriceAmazon" onClick={sortByPriceAvgAmazon}>{priceAVG}</span>
        </AvgFilter>
      </FiltersContainer>
      {list && list.length > 0 ? 
        list.map((item, index) => {
          const { name, fetch_date, avg_price_amazon, avg_price_carethy } = item;
          return (
            <Item key={index} 
              name={name} 
              date={fetch_date}
              avgPriceCarethy={avg_price_carethy} 
              avgPriceAmazon={avg_price_amazon} 
            />
          )
        }) : 
        <Title text={"No results Found :("} centered={true} />
      }
    </Grid>
  )
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    fetch_date: PropTypes.string,
    avg_price_amazon: PropTypes.number,
    avg_price_carethy: PropTypes.number
  })),
  sortByName: PropTypes.func,
  sortByPriceCarethy: PropTypes.func,
  sortByPriceAvgAmazon: PropTypes.func
};

List.defaultProps = {
  sortByName: () => {},
  sortByPriceCarethy: () => {},
  sortByPriceAvgAmazon: () => {},
};

export default List;