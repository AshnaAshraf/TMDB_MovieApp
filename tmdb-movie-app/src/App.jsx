import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import MovieList from './components/movieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router basename="/TMDB_MovieApp">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">🎬 TMDB Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
