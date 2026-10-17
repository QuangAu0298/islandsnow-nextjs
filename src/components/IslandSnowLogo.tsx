import { Container, Row, Col, Image } from 'react-bootstrap';


const IslandSnowLogo = () => (
  <Container>
    <Row>
      <Col>
        <Image className="img-fluid rounded mx-auto d-block py-1" 
        src="/experience-islandsnow-bootstrap-logo.png" alt='Brand logo'/>
      </Col>
    </Row>
  </Container>
);

export default IslandSnowLogo;