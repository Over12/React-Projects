const API_KEY = '9ed2a397'

export const searchMovies = async({ search }) => {
  if(search === '' || search?.length < 3) return null

  try{
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }))
  } catch(e) {
    throw new Error('Error al buscar las películas')
  }

}