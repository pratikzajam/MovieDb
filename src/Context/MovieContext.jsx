import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

export let MovieContext = createContext()

export let MovieProvider = ({ children }) => {
    let [movie, setMovie] = useState([])
    let [endpoint, setendpoint] = useState("now_playing")

    let fetchMovies = async () => {
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2NmNDdkYjg1ODQ3YzAzZTJkNWNjNTA0N2QzNzliNCIsIm5iZiI6MTczNTIyNDEwMS40NDMsInN1YiI6IjY3NmQ2YjI1ZjliYzAyZTQ5ODkyODFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnzWLLcIp6mtfI-OWg01wFltaUaA3kSqmXPx7Wdr__E'
            }
        };

        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/${endpoint}`, options)


            console.log(response)
            setMovie(response.data.results)


        } catch (error) {
            console.error('Error fetching movies:', error)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [endpoint])

    return <MovieContext.Provider value={{ movie,setendpoint,endpoint,setMovie }}>{children}</MovieContext.Provider>
}

export default MovieProvider
