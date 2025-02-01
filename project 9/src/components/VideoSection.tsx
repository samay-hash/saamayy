import React, { useState } from 'react';
import { Play, Pause, X } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Amazing Sunset',
    thumbnail: 'https://images.unsplash.com/photo-1502790671504-542ad42d5189?auto=format&fit=crop&w=800&q=60',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'City Life',
    thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=60',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Mountain Adventure',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '4',
    title: 'Ocean Waves',
    thumbnail: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=60',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '5',
    title: 'Desert Journey',
    thumbnail: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=60',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '6',
    title: 'Forest Mystery',
    thumbnail: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=60',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Featured Videos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-12 h-12 text-white" />
              </div>
              <h3 className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={24} />
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={selectedVideo.url}
                  title={selectedVideo.title}
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