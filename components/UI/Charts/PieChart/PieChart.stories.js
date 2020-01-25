import { storiesOf } from '@storybook/react';
import PieChart from './PieChart';

const data = [
  {name: 'Shalion 1', value: 1},
  {name: 'Shalion 2', value: 2},
  {name: 'Shalion 3', value: 3},
  {name: 'Shalion 4', value: 4},
  {name: 'Shalion 5', value: 4},
];

storiesOf('PieChart')
  .add('PieChart default', () => (
    <PieChart data={data}/>
  ))
