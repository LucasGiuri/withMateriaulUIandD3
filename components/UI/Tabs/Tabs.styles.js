import styled from 'styled-components';
import { SECONDARY, WHITE } from '../../../public/styles/colors';

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${WHITE};
  color: ${SECONDARY};
`;

export const TabContainer = styled.div.attrs(props => ({
    isSelected: props.tabSelected === props.id,
  }))`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  tex-align: center;
  border-bottom: 1px solid ${SECONDARY};
  background-color: ${props => props.isSelected ? WHITE : SECONDARY};
  cursor: pointer;

  p {
    color: ${props => props.isSelected ? SECONDARY : WHITE};
  }
`;

