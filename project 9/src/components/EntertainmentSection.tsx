import React, { useState } from 'react';
import { Play, Info } from 'lucide-react';

interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  video: string;
  genre: string;
}

const movies: Movie[] = [
  {
    id: '1',
    title: 'Ocean Adventure',
    description: 'An epic journey across the seven seas.',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    genre: 'Adventure'
  },
  {
    id: '2',
    title: 'City Nights',
    description: 'A thriller set in the heart of New York.',
    thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    genre: 'Thriller'
  },
  {
    id: '3',
    title: 'Desert Storm',
    description: 'Survival against the elements.',
    thumbnail: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    genre: 'Action'
  },
  {
    id: '4',
    title: 'Mountain Peak',
    description: 'A journey to the highest summit.',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    genre: 'Documentary'
  },
  {
    id: '5',
    title: 'Forest Mystery',
    description: 'Uncover the secrets of the ancient woods.',
    thumbnail: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    genre: 'Mystery'
  },
  {
    id: '6',
    title: 'Arctic Expedition',
    description: 'A journey through the frozen wilderness.',
    thumbnail: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    genre: 'Adventure'
  },
  {
    id: '7',
    title: 'Urban Legend',
    description: 'The truth behind city myths.',
    thumbnail: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    genre: 'Documentary'
  },
  {
    id: '8',
    title: 'Space Odyssey',
    description: 'Journey beyond the stars.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    genre: 'Sci-Fi'
  }
];

export default function EntertainmentSection() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [hoveredMovie, setHoveredMovie] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Entertainment</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative group"
              onMouseEnter={() => setHoveredMovie(movie.id)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full aspect-[16/9] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              
              {hoveredMovie === movie.id && (
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-between p-4 rounded-lg">
                  <div>
                    <h3 className="text-xl font-bold text-white">{movie.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">{movie.genre}</p>
                    <p className="text-sm text-gray-400 mt-2">{movie.description}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedMovie(movie)}
                      className="flex items-center bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </button>
                    <button
                      className="flex items-center bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Info className="w-4 h-4 mr-2" />
                      Info
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedMovie && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute -top-12 right-0 text-white hover:text-red-500"
                onClick={() => setSelectedMovie(null)}
              >
                Close
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={selectedMovie.video}
                  title={selectedMovie.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}