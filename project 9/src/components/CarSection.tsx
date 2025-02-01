import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface Car {
  id: string;
  brand: string;
  model: string;
  image: string;
  video: string;
}

const cars: Car[] = [
  {
    id: '1',
    brand: 'Lamborghini',
    model: 'Aventador',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '2',
    brand: 'Bugatti',
    model: 'Chiron',
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '3',
    brand: 'Ferrari',
    model: 'SF90 Stradale',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '4',
    brand: 'McLaren',
    model: '720S',
    image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '5',
    brand: 'Porsche',
    model: '911 GT3',
    image: 'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '6',
    brand: 'Aston Martin',
    model: 'Valhalla',
    image: 'https://images.unsplash.com/photo-1617451735426-98aa905fa582?auto=format&fit=crop&w=800&q=60',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export default function CarSection() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Luxury Cars</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedCar(car)}
            >
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">{car.brand}</h3>
                <p className="text-lg text-gray-300">{car.model}</p>
                <div className="mt-4 flex items-center text-white">
                  <Play className="w-6 h-6 mr-2" />
                  <span>Watch Video</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedCar && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute -top-12 right-0 text-white hover:text-red-500"
                onClick={() => setSelectedCar(null)}
              >
                Close
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={selectedCar.video}
                  title={`${selectedCar.brand} ${selectedCar.model}`}
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