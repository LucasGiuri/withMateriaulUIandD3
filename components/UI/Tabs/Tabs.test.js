import renderer from 'react-test-renderer';
import Tabs from './Tabs';
import 'jest-styled-components';

describe('Tabs', () => {
  it('Tabs basic render snapshoot', () => {
    const component = renderer.create(<Tabs />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Tabs click in another tab', () => {
    const setTab = jest.fn();
    const component = (<Tabs setTab={setTab} />);
    const tree = renderer.create(component);
    const tab = tree.root.findByType(div);
    tab.props.onClick();
    expect(setTab).toHaveBeenCalledTimes(1);
  })
})
