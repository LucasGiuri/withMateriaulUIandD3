import NavLink from '../NavLink/NavLink';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';

const links = [
  {id: 1, page: "/", text: "Home"},
  {id: 2, page: "/dashboard", text: "Dashboard"},
];


const Menu = () => (
  <List>
    {links.map((link, index) => (
      <NavLink key={link.id} href={link.page} as={link.page}>
        <ListItem button key={link.id}>
          <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <DashboardIcon />}</ListItemIcon>
          <ListItemText primary={link.text} />
        </ListItem>
      </NavLink>
    ))}
  </List>
);

export default Menu;