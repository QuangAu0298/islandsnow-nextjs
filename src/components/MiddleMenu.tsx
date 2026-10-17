import { Container, Row, Col, NavLink, NavDropdown } from 'react-bootstrap';


const MiddleMenu = () => (
  <Container className="bg-white p-5 text-center" 
        style={{ maxWidth: '600px', width: '100%' }}>
  <Row>
    <Col>
      <NavDropdown title="MEN">
        <NavDropdown.Item></NavDropdown.Item>
      </NavDropdown>
    </Col>
    <Col>
      <NavDropdown title="WOMEN">
        <NavDropdown.Item></NavDropdown.Item>
      </NavDropdown>
    </Col>
    <Col>
      <NavDropdown title="KIDS">
        <NavDropdown.Item></NavDropdown.Item>
      </NavDropdown>
    </Col>
    <Col>
      <NavDropdown title="BRANDS">
        <NavDropdown.Item></NavDropdown.Item>
      </NavDropdown>
    </Col>
    <Col>
      <NavLink>SEARCH</NavLink>
    </Col>
  </Row>
  </Container>
);

export default MiddleMenu;
