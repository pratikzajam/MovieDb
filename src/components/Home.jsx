import React from 'react'
import { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';

const Home = () => {

    let { movie } = useContext(MovieContext)



    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6"> Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movie.map((ele) => (
                    <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${ele.poster_path}`}
                            alt={ele.title}
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-white text-lg font-semibold mb-2">{ele.original_title}</h2>
                            <div className="flex justify-between items-center">
                                <span className="text-yellow-500">⭐ {ele.rating}</span>
                                <span className="text-gray-400">{ele.releaseDate}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home