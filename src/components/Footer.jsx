
import { Container, Row, Col } from 'react-bootstrap';

function Footer () {
  return (
    <footer style={{ backgroundColor: '#121212', color: 'white', padding: '20px 0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <p>&copy; 2025 My React App. All rights reserved. 🚀</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
