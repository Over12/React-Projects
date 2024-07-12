import { searchMovies } from '../services/movies'
import { useMemo, useCallback, useRef, useState } from 'react'

export function useMovies({ sort }){
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef('')

  const getMovies = useCallback(async ({ search }) => {
      if (search === '' || search?.length < 3) return
      if (previousSearch.current === search) return
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search})
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }, [])

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => b.year.localeCompare(a.year)) : movies
  }, [movies, sort])

  return { movies: sortedMovies, getMovies, loading, error }
}
