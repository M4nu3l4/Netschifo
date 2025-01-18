import { Container, Row, Col } from "react-bootstrap";


function TVShows() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={12}>
          <div
            style={{
              backgroundColor: "#121212",
              color: "white",
              minHeight: "100vh",
              textAlign: "center",
            }}
          >
            <h1>TV Shows Page</h1>
            <p>Benvenuto nella pagina delle serie TV!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TVShows;
