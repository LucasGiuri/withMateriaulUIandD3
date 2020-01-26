import PropTypes from 'prop-types';
import { TabsContainer, TabContainer } from './Tabs.styles';
import Title from '../Title/Title';

const Tabs = ({setTab, tabSelected}) => {
  const selectTab = (id) => {
    setTab(id)
  };

  const titles = [
    {id: 1, title: 'Products'},
    {id: 2, title: 'Categories'}
  ];

  return (
    <TabsContainer>
      {titles.map(data => (
        <TabContainer
          tabSelected={tabSelected} 
          id={data.id}
          key={data.id} 
          onClick={() => selectTab(data.id)
        }>
          <Title key={data.id} centered={true} text={data.title} />
        </TabContainer>
      ))};
    </TabsContainer>
  )
};

Tabs.propTypes = {
  tabSelected: PropTypes.number,
  setTab: PropTypes.func
};

Tabs.defaultProps = {
  tabSelected: 1,
  setTab: () => {}
};

export default Tabs;