import { PropTypes } from 'prop-types'

const moviePropTypes = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
})).isRequired;

function ListOfMovies({ movies }) {
  return (
    <ul className='movies'>
      {movies.map(movie => (
        <li className='movie' key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

function RenderNoResults() {
  return <p>No se encontraron resultados</p>
}

export function Movies({ movies }){
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <RenderNoResults />
  )

}

Movies.propTypes = {
  movies: moviePropTypes,
}

ListOfMovies.propTypes = {
  movies: moviePropTypes,
}