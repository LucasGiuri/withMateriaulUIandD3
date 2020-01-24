import PropTypes from 'prop-types';
import { Grid, FiltersContainer } from './List.styles';
import Title from '../Title/Title';
import Item from '../Item/Item';

const List = ({list, sortByName, sortByPriceAvgAmazon}) => {
  const productName = "Product Name";
  const priceAVG = "Price AVG";

  return (
    <Grid>
      <FiltersContainer>
        <span onClick={sortByName}>{productName}</span>
        <span onClick={sortByPriceAvgAmazon}>{priceAVG}</span>
      </FiltersContainer>
      {list ? 
        list.map((item, index) => {
          const { name, fetch_date, avg_price_amazon } = item;
          return (
            <Item key={index} 
              name={name} 
              date={fetch_date} 
              avgPriceAmazon={avg_price_amazon} 
            />
          )
        }) : 
        <Title text={"No results Found :("} />
      }
    </Grid>
  )
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })),
  filterBy: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired
};

export default List;