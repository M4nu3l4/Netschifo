import { Component } from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import Recensioni from "./Recensioni"; // Importa Recensioni

const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f15a86c1";

class MainContent extends Component {
  state = {
    video: null,
  };

  getVideo = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Errore nella chiamata API");
      }
      const data = await response.json();
      this.setState({ video: data });
    } catch (error) {
      console.error("ERRORE:", error);
    }
  };

  componentDidMount() {
    this.getVideo();
  }

  render() {
    const { video } = this.state;

    return (
      <Container>
        <Row className="justify-content-center my-3">
          <Col xs={12} md={6}>
            <div>
              <h2 className="text-center">Trending Now</h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-3">
          <Col xs={12} md={6}>
            {video ? (
              <>
                <ListGroup>
                  <ListGroup.Item key={video.imdbID}>
                    <h3>{video.Title}</h3>
                    <Image src={video.Poster} alt={video.Title} fluid />
                    <p>
                      {video.Genre} | {video.Year}
                    </p>
                  </ListGroup.Item>
                </ListGroup>
                <Recensioni video={video} /> {/* Passa video come prop */}
              </>
            ) : (
              <p>Caricamento in corso...</p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainContent;


