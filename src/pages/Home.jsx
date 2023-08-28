import { useState, useEffect } from "react";
import * as API from "../services/getData";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import "./Home.css";
import { MovieDetails } from "./MovieDetails";

export function Home() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    API.getData()
      .then((res) => {
        setData(res.movies);
        setLoaded(true);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Button className="btn-info m-4" id="home_content">
        HOME PAGE
      </Button>
      {/* {JSON.stringify(data)} */}
      {data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ul className="d-flex flex-wrap gap-3">
          {data.map((movie, i) => (
            <li key={i}>
              <Link to={`/movie/${i}`} state={movie}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {movie.showTime}
                  </Card.Subtitle>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link>
                    More Details Page
                  </Card.Link> */}
                </Card.Body>
              </Card>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* <li>
          <Link to={`/movie/1`}>More Details 1</Link>
        </li>
        <li>
          <Link to={`/movie/2`}>More Details 2</Link>
        </li>
        <li>
          <Link to={`/movie/3`}>More Details 3</Link>
        </li> */}
    </>
  );
}
