import React from 'react';
import renderer from 'react-test-renderer';
import PieChart from './PieChart';
import 'jest-styled-components';

describe('PieChart', () => {
  const data = [
    {name: 'Shalion 1', value: 1},
    {name: 'Shalion 2', value: 2},
    {name: 'Shalion 3', value: 3},
    {name: 'Shalion 4', value: 4},
    {name: 'Shalion 5', value: 4},
  ];

  it('PieChart basic render snapshoot', () => {
    const component = renderer.create(<PieChart  data={data} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
