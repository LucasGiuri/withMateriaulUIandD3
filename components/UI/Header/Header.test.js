import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import 'jest-styled-components';

jest.mock('../Menu/Menu', () => 'Menu');
jest.mock('@material-ui/icons/Menu', () => 'MenuUI');
jest.mock('@material-ui/core/Drawer', () => 'Drawer');
jest.mock('@material-ui/core/AppBar', () => 'AppBar');
jest.mock('@material-ui/core/Toolbar', () => 'Toolbar');
jest.mock('@material-ui/core/Typography', () => 'Typography');
jest.mock('@material-ui/core/IconButton', () => 'IconButton');

describe('Header', () => {
  it('Header basic render snapshoot', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
