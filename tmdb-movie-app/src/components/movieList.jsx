import React, { useEffect, useState } from 'react';
import { Row, Spinner, Alert } from 'react-bootstrap';
import MovieCard from './movieCard';
import tmdb from '../api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    tmdb
      .get('/movie/popular', {
        params: { language: 'en-US', page: 1 },
      })
      .then((res) => setMovies(res.data.results))
      .catch(() => setError('Failed to load movies'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;
  if (error) return <Alert variant="danger" className="text-center">{error}</Alert>;

  return (
    <>
      <h3 className="mb-4">Popular Movies</h3>
      <Row>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>
    </>
  );
};

export default MovieList;
