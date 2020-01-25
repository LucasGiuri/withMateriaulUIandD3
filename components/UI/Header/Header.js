import { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';

const ButtonAppBar = () => {
  const [menu, setMenuStatus] = useState(false);

  const links = [
    {id: 1, page: "/", text: "Home"},
    {id: 2, page: "/dashboard", text: "Dashboard"},
  ];

  const toggleDrawer = () => {
    setMenuStatus(!menu);
  };

  const sideList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {links.map((link, index) => (
          <NavLink href={link.page} as={link.page}>
            <ListItem button key={link.id}>
              <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <DashboardIcon />}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static">
      {/* <Toolbar>
        <Drawer open={menu} onClose={toggleDrawer}>
          {sideList('left')}
        </Drawer>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Shalion !
        </Typography>
      </Toolbar> */}
    </AppBar>
  );
};

export default ButtonAppBar;


// import Image from '../Image/Image';
// import Menu from '../../containers/Menu';
// import { HeaderContainer } from './Header.styles';
// import NavLink from '../NavLink/NavLink';

// const Header = () => (
//   <HeaderContainer>
//     <NavLink href="/" as="/">
//       <Image isLogo={true} url="/static/icons/logo.png" alt="logo" />
//     </NavLink>
//     <Menu />
//   </HeaderContainer>
// );

// export default Header;