import { Component } from "react";
import { Container, Row, Col, ListGroup, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const SEARCH_URL = "https://www.omdbapi.com/?apikey=f15a86c1&s=Star%20Wars";
const DETAILS_URL = "https://www.omdbapi.com/?apikey=f15a86c1&i=";

class MainContent extends Component {
  state = {
    videos: [],
    loading: true,
    error: null,
  };

  getVideo = async () => {
    try {
      const response = await fetch(SEARCH_URL);
      if (!response.ok) {
        throw new Error("Errore nella chiamata API");
      }
      const data = await response.json();
      if (data.Search) {
        const videosWithDetails = await Promise.all(
          data.Search.map(async (video) => {
            const detailsResponse = await fetch(`${DETAILS_URL}${video.imdbID}`);
            const details = await detailsResponse.json();
            return { ...video, Runtime: details.Runtime };
          })
        );
        this.setState({ videos: videosWithDetails, loading: false });
      } else {
        this.setState({ error: "Nessun risultato trovato", loading: false });
      }
    } catch (error) {
      console.error("ERRORE:", error);
      this.setState({ error: error.message, loading: false });
    }
  };

  componentDidMount() {
    this.getVideo();
  }

  render() {
    const { videos, loading, error } = this.state;

    return (
      <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "white" }}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <h2 className="text-center">Star Wars</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {loading ? (
              <Spinner animation="border" role="status" className="text-white">
                <span className="visually-hidden">Caricamento...</span>
              </Spinner>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              videos.map((video) => (
                <Col xs={12} sm={6} md={4} lg={3} key={video.imdbID} className="mb-3">
                  <ListGroup>
                    <ListGroup.Item className="bg-dark text-white">
                      <h5 className="text-center">{video.Title}</h5>
                      <Link to={`/movie-details/${video.imdbID}`}>
                        <Image
                          src={video.Poster}
                          alt={video.Title}
                          fluid
                          style={{ height: "300px", objectFit: "cover" }}
                        />
                      </Link>
                      <p className="text-center">
                        {video.Year} | {video.Runtime || "N/A"}
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainContent;
