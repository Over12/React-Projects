import './App.css'

import { useEffect, useState, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const debouncedGetMovies = useCallback(debounce( search  => {
    getMovies({ search })
  }, 500), [getMovies])

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  useEffect(() => {
    console.log('IDK')
  }, [getMovies])

  return (
    <div className='page'>
      <h1>Buscador de películas</h1>
      <header>
        <form onSubmit={handleSubmit} className='form'>
          <input style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} onChange={handleChange} value={search} name='query' type="text" placeholder='Star Wars, Avengers, Godzilla...'/>
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
