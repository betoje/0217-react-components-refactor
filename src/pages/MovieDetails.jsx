import { useParams, Link, useLocation } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import './MovieDetails.css';

export function MovieDetails() {

  const {movieId} = useParams();
  let {state} = useLocation();
  const movieStyle = {
    background: 'url(' + state.imageUrl + ')',
    backgroundSize: 'cover',
  };
   
  return (
    <div className="movie-card">
    <div className="movie-header" style={movieStyle}>
      <div className="header-icon-container">
        <a href="#">
          <i className="material-icons header-icon"></i>
        </a>
      </div>
    </div>
    <div className="movie-content">
      <div className="movie-content-header">
        <a href="#">
          <h3 className="movie-title">{state.title}</h3>
        </a>
        <div className="imax-logo"></div>
      </div>
      <div className="movie-info">
        <div className="info-section">
          <label>Date & Time</label>
          <span>{state.showTime}</span>
        </div>
        <div className="info-section">
          <label>Screen</label>
          <span>{state.screen}</span>
        </div>
        <div className="info-section">
          <label>Row</label>
          <span>{state.row}</span>
        </div>
        <div className="info-section">
          <label>Seat</label>
          <span>{state.seat}</span>
        </div>
      </div>
    </div>
  </div>
    // <>
    //     <h1>{state.title}</h1>
    //     <Button className="bg-success mt-4" id="about_content">MOVIE DETAIL: {movieId}</Button>
    // </>
  );
}