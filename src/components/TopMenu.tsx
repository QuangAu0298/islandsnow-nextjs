import { Container, Nav, NavLink, Navbar, NavDropdown, DropdownItem, DropdownItemText } from 'react-bootstrap';
import { Facebook, TwitterX, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <NavLink>
          <Facebook />
        </NavLink>
        <NavLink>
          <TwitterX />
        </NavLink>
        <NavLink>
          <Pinterest />
        </NavLink>
        <NavLink>
          <Instagram />
        </NavLink>
      </Nav>
      <Nav className="justify-content-end">
        <NavLink>
          <HouseFill />
          {' '}
        </NavLink>
        <NavLink>
          <Search />
          {' '}
        </NavLink>
        <NavLink>
          <PersonFill />
          {' '}
        </NavLink>
        <NavDropdown title={<Cart />}>
          <DropdownItem>
            <DropdownItemText>Your cart is currently empty.</DropdownItemText>
          </DropdownItem>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
