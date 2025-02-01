import React, { useState, useRef, useEffect } from 'react';
import { Camera, Loader } from 'lucide-react';

export default function FaceScan() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !scanComplete) {
          startScan();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [scanComplete]);

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative w-80 h-80 bg-black/50 rounded-lg overflow-hidden">
        <div className={`absolute inset-0 border-4 border-blue-500 ${
          isScanning ? 'animate-pulse' : ''
        }`}>
          {isScanning && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader className="w-16 h-16 text-blue-500 animate-spin" />
            </div>
          )}
          {scanComplete && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70">
              <div className="text-center">
                <Camera className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-white text-lg">Scan Complete</p>
              </div>
            </div>
          )}
        </div>
        <div className={`absolute top-0 w-full h-1 bg-blue-500 transition-transform duration-3000 ${
          isScanning ? 'translate-y-80' : '-translate-y-full'
        }`} />
      </div>
    </div>
  );
}