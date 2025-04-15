import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Spinner, Alert, Image, Breadcrumb, Row, Col } from 'react-bootstrap';
import tmdb from '../api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    tmdb
      .get(`/movie/${id}`, { params: { language: 'en-US' } })
      .then((res) => setMovie(res.data))
      .catch(() => setError('Failed to load movie details'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;
  if (error) return <Alert variant="danger" className="text-center">{error}</Alert>;

  return (
    <>
      <Breadcrumb className="mb-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{movie.title}</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col md={4}>
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://via.placeholder.com/500x750?text=No+Image'
            }
            fluid
            rounded
          />
        </Col>
        <Col md={8}>
          <h2>{movie.title}</h2>
          <p className="text-muted">{movie.overview}</p>
          <ul className="list-unstyled">
            <li><strong>Release Date:</strong> {movie.release_date}</li>
            <li><strong>Rating:</strong> {movie.vote_average} / 10</li>
            <li><strong>Runtime:</strong> {movie.runtime} minutes</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default MovieDetails;
