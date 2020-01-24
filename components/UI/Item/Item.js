import { ItemContainer, IteamHeader, Date } from './Item.styles';
import PropTypes from 'prop-types';

const Item = ({name, date, avgPriceAmazon}) => {
  return (
    <ItemContainer>
      <IteamHeader>
        <span>{name}</span>
        <span>{avgPriceAmazon ? `${avgPriceAmazon} EUR`: ''}</span>
      </IteamHeader>
      <Date>{date}</Date>
    </ItemContainer>
  );
};

Item.propTypes = {
  children: PropTypes.node
};

export default Item;