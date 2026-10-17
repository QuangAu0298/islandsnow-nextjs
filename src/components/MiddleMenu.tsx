import { Container, Row, Col, NavLink, NavDropdown, DropdownItem } from 'react-bootstrap';


const MiddleMenu = () => (
  <Container className="bg-white p-5 text-center" 
        style={{ maxWidth: '600px', width: '100%' }}>
  <Row>
    <Col>
      <NavDropdown title="MEN">
        <DropdownItem></DropdownItem>
      </NavDropdown>
    </Col>
    <Col>
      <NavDropdown title="WOMEN">
        <DropdownItem></DropdownItem>
      </NavDropdown>
    </Col>
    <Col>
      <NavDropdown title="KIDS">
        <DropdownItem></DropdownItem>
      </NavDropdown>
    </Col>
    <Col>
      <NavDropdown title="BRANDS">
        <DropdownItem></DropdownItem>
      </NavDropdown>
    </Col>
    <Col>
      <NavLink>SEARCH</NavLink>
    </Col>
  </Row>
  </Container>
);

export default MiddleMenu;
