import { withRouter } from 'next/router';
import Menu from '../../UI/Menu/Menu';

const MenuContainer = ({router}) => {
  const { pathname } = router;

  const urls = [{
    url: "/",
    href: "/",
    text: "People"
  },
  {
    url: "/films",
    href: "/films",
    text: "Films"
  },
  {
    url: "/vehicles",
    href: "/vehicles",
    text: 'Vehicles'
  },
  {
    url: '/planets',
    href: '/planets',
    text: 'Planets'
  }];

  return <Menu urls={urls} currentPath={pathname} />
};

export default withRouter(MenuContainer);