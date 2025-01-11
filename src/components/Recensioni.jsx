import { Row, Col, ListGroup } from "react-bootstrap";

function Recensioni (video)  {
  if (!video || !video.Ratings || video.Ratings.length === 0) {
    return <p>Non ci sono recensioni disponibili.</p>;
  }

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <ListGroup className="text-center">
          {video.Ratings.map((rating, index) => (
            <ListGroup.Item key={index}>
              <strong>{rating.Source}:</strong> {rating.Value}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Recensioni;
