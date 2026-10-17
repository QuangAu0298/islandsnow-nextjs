import { Row, Col, Image } from 'react-bootstrap';

const FullWidthImage = () => (
  <Row>
    <Col>
      <Image className="img-fluid mx-auto d-block" 
      src="/experience-islandsnow-bootstrap-main.png"
      alt='Island Snow Backdrop'/>
    </Col>
  </Row>
);

export default FullWidthImage;