import styled from 'styled-components';
import { WHITE, OLD_GREY } from '../../../public/styles/colors';

export const ItemContainer = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid ${OLD_GREY};
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  transition: 0.25s;
  color: ${OLD_GREY};
  &:hover {
    color: ${WHITE};
  }
`;

export const IteamHeader = styled.div`
  display: flex;
  padding-bottom: 34px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Date = styled.div`
  font-size: 14px;
`;