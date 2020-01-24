import { withRouter } from 'next/router';
import Menu from '../../UI/Menu/Menu';

const MenuContainer = ({router}) => {
  const { pathname } = router;

  const urls = [{
    url: "/",
    href: "/",
    text: "List"
  },
  {
    url: '/charts',
    href: '/charts',
    text: 'Charts'
  }];

  return <Menu urls={urls} currentPath={pathname} />
};

export default withRouter(MenuContainer);