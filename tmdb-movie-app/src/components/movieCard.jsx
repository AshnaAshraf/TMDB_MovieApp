import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card className="h-100 shadow-sm border-0 hover-zoom">
          <Card.Img
            variant="top"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://via.placeholder.com/500x750?text=No+Image'
            }
            alt={movie.title}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">{movie.title}</Card.Title>
            <Card.Text className="text-muted small">
              {movie.overview.slice(0, 80)}...
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default MovieCard;
