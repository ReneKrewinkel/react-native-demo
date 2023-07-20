import { useState, useEffect } from'react'


const useFetch = (url) => {

  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect( () => {

    fetch(url)
      .then(result => result.json()) /// convert the result to a JSON object
      .then(data => {  /// The return of 'result.json' is passed on as 'data'
        setData(data)
        setIsLoaded(true)
      })
      .catch(err => {  /// Oops! we got an error! let's 'reject' this call!
        setError(err)
      })
  }, [url])

  return  [data, isLoaded, error]
}

export default useFetch