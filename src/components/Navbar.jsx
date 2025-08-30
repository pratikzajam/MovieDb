import React from 'react'
import { MovieContext } from '../Context/MovieContext'
import { useContext } from 'react';
import axios from 'axios'

const Navbar = () => {

  const { movie, setMovie, setendpoint, endpoint } = useContext(MovieContext);

    console.log(endpoint)


    let handleChange = (e) => {


        let movie = e.target.value

        let fetchMovies = async () => {
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2NmNDdkYjg1ODQ3YzAzZTJkNWNjNTA0N2QzNzliNCIsIm5iZiI6MTczNTIyNDEwMS40NDMsInN1YiI6IjY3NmQ2YjI1ZjliYzAyZTQ5ODkyODFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnzWLLcIp6mtfI-OWg01wFltaUaA3kSqmXPx7Wdr__E'
                }
            };

            try {
                let response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}`, options)


                console.log(response)
                setMovie(response.data.results)


            } catch (error) {
                console.error('Error fetching movies:', error)
            }
        }

        fetchMovies()
    }


    return (
        <nav className="bg-gray-800 px-4 py-3">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">

                    <div className="text-white text-xl font-bold">
                        MovieDB
                    </div>


                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" onClick={() => setendpoint("now_playing")} className="text-gray-300 hover:text-white">Now Playing</a>
                        <a href="#" onClick={() => setendpoint("popular")} className="text-gray-300 hover:text-white">Popular</a>
                        <a href="#" onClick={() => setendpoint("top_rated")} className="text-gray-300 hover:text-white">Top Rated</a>
                        <a href="#" onClick={() => setendpoint("upcoming")} className="text-gray-300 hover:text-white">Upcoming</a>
                    </div>


                    <div className="hidden md:block">
                        <div className="flex items-center">
                            <input
                                onChange={handleChange}
                                type="text"
                                name="search"
                                placeholder="Search movies..."
                                className="px-4 py-1 rounded-l-md focus:outline-none"
                            />
                            <button
                                className="bg-blue-500 text-white px-4 py-1 rounded-r-md hover:bg-blue-600"
                            >
                                Search
                            </button>
                        </div>
                    </div>


                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar