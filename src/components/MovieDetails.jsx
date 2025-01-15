import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Spinner, Alert } from "react-bootstrap";

const DETAILS_URL = "https://www.omdbapi.com/?apikey=f15a86c1&i=";

function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
     
        const detailResponse = await fetch(`${DETAILS_URL}${movieId}`);
        if (!detailResponse.ok) {
          throw new Error("Errore durante il recupero dei dettagli del film.");
        }
        const detailData = await detailResponse.json();
        setDetails(detailData);

        const commentsResponse = await fetch(`https://www.omdbapi.com/?apikey=f15a86c1&i=${movieId}`);
        if (!commentsResponse.ok) {
          throw new Error("Errore durante il recupero dei commenti.");
        }
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  return (
    <Container style={{ backgroundColor: "#121212", color: "white", minHeight: "100vh" }}>
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="light" />
        </div>
      ) : error ? (
        <Alert variant="danger" className="mt-5">
          {error}
        </Alert>
      ) : (
        <>
          {details && (
            <Row className="bg-dark p-3">
              <Col xs ={12} md={6}>
                <h1>{details.Title}</h1>
                <img
                  src={details.Poster}
                  alt={details.Title}
                  className="img-fluid mb-3"
                  style={{ borderRadius: "10px" }}
                />
              </Col>
              <Col md={6}>
                <h3>Trama</h3>
                <p>{details.Plot}</p>
                <p><strong>Durata:</strong> {details.Runtime}</p>
                <p><strong>Genere:</strong> {details.Genre}</p>
                <p><strong>Anno:</strong> {details.Year}</p>
              </Col>
            </Row>
          )}
          <Row className="mt-4">
            <Col>
              <h3>Commenti</h3>
              {comments.length > 0 ? (
                <ListGroup>
                  {comments.map((comment, index) => (
                    <ListGroup.Item
                      key={index}
                      style={{ backgroundColor: "#333", color: "white", borderRadius: "5px" }}
                    >
                      {comment.text}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>Non ci sono commenti disponibili.</p>
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default MovieDetails;
