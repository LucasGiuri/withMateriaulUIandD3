import { ItemContainer, IteamHeader, Date, AvgColumn } from './Item.styles';
import PropTypes from 'prop-types';

const Item = ({name, date, avgPriceCarethy, avgPriceAmazon}) => {
  return (
    <ItemContainer>
      <IteamHeader>
        <span>{name}</span>
        <AvgColumn>
          <span>{avgPriceCarethy ? `${avgPriceCarethy} EUR`: ''}</span>
          <span>{avgPriceAmazon ? `${avgPriceAmazon} EUR`: ''}</span>
        </AvgColumn>
      </IteamHeader>
      <Date>{date}</Date>
    </ItemContainer>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired, 
  date: PropTypes.string, 
  avgPriceCarethy: PropTypes.number, 
  avgPriceAmazon: PropTypes.number
};

Item.defaultProps = {
  date: '',
  avgPriceCarethy: 1,
  avgPriceAmazon: 1
};

export default Item;