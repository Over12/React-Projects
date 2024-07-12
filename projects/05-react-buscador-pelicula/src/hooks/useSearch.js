import { useState, useEffect, useRef } from 'react'

export function useSearch(){
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if (search.length < 1) {
      setError('Debes ingresar un texto')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    return setError(null)
  }, [search])

  return { search, setSearch, error }
}