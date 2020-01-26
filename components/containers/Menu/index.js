import MenuComponent from '../../UI/Menu/Menu';

const Menu = () => {
  const links = [
    {id: 1, page: "/", text: "Home"},
    {id: 2, page: "/dashboard", text: "Dashboard"},
  ];

  return (
    <MenuComponent links={links} />
  )
}

export default Menu;