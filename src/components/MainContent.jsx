import { Component } from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import Recensioni from "./Recensioni";
import Loading from "./Loading";
//f15a86c1

const URL =  'https://www.omdbapi.com/?apikey=f15a86c1&s=Star%20Wars';

class MainContent extends Component {
    state = {
    video: null,
    loading: true,
  };

  getVideo = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Errore nella chiamata API");
      }
      const data = await response.json();
      this.setState({ video: data, loading: false });
    } catch (error) {
      console.error("ERRORE:", error);
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.getVideo();
  }

  render() {
    const { video, loading } = this.state;

    return (
      <Container>
      
        <Row className="justify-content-center my-3">
          <Col xs={12} md={6}>
            {loading ? (
              <Loading />
            ) : video ? (
              <ListGroup>
                <ListGroup.Item key={video.imdbID}>
                  <h3>{video.Title}</h3>
                  <Image src={video.Poster} alt={video.Title} fluid />
                  <p>
                    {video.Genre} | {video.Year}
                  </p>
                  <Recensioni video={video.Ratings} />
                </ListGroup.Item>
              </ListGroup>
            ) : (
              <p>Non ci sono contenuti disponibili.</p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainContent;



