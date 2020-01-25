import Menu from './Menu';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

jest.mock('@material-ui/core/ListItemIcon', () => 'ListItemIcon');
jest.mock('@material-ui/core/ListItemText', () => 'ListItemText');
jest.mock('@material-ui/icons/Home', () => 'HomeIcon');
jest.mock('@material-ui/icons/Dashboard', () => 'DashboardIcon');
jest.mock('../NavLink/NavLink', () => 'NavLink');
jest.mock('@material-ui/core/List', () => 'List');

describe('Menu', () => {
	it('Menu basic render snapshoot', () => {
		const component = renderer.create(<Menu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})