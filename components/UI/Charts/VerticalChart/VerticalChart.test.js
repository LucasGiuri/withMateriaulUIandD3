import renderer from 'react-test-renderer';
import BarChart from './BarChart';
import 'jest-styled-components';

describe('BarChart', () => {
  const data = [
    {name: 'Shalion 1', value: 1},
    {name: 'Shalion 2', value: 2},
    {name: 'Shalion 3', value: 3},
    {name: 'Shalion 4', value: 4},
    {name: 'Shalion 5', value: 4},
  ];

  it('BarChart basic render snapshoot', () => {
    const component = renderer.create(<BarChart  data={data} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
