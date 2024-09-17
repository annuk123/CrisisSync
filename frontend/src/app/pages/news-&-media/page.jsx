"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

// Dynamically import the Leaflet component with SSR disabled
const LeafletMap = () => {
  const [L, setL] = useState(null);

  useEffect(() => {
    const loadLeaflet = async () => {
      const leaflet = await import('leaflet');
      setL(leaflet);
    };

    if (typeof window !== 'undefined') {
      loadLeaflet();
    }
  }, []);

  useEffect(() => {
    if (L) {
      const leafletMap = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(leafletMap);

      L.marker([51.505, -0.09])
        .addTo(leafletMap)
        .bindPopup('A pretty popup.')
        .openPopup();
    }
  }, [L]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 p-6">

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-200 to-gray-300 p-6">
        <h3 className="text-lg font-serif uppercase mb-4 text-gray-700 tracking-wider animate-fadeIn">
          Latest News & Media Updates
        </h3>

        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6 animate-slideIn">
          Welcome to the News Hub
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <Image
              src='https://imgs.search.brave.com/wtoBH0EleU_vhNZ0QzVj_gFYsoScLToDYzHQiFyCsA0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/MjU4NTgzMC9waG90/by93YXItem9uZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MjNmaGhCSDNzbGlw/Y1RfLWdpSjNQWmFI/WW13R0tBd3Y2dTF3/anc4WHJEWT0'
              alt="News"
              width={860}
              height={600}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              Breaking News: Major Event Unfolds
            </h2>
            <p className="text-gray-600 mt-2">
              Stay updated with the latest news and events happening around the world...
            </p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Read More
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <Image
              src='https://imgs.search.brave.com/krQ3M2kgNdo9hixaKv-HP9YHQT5IfKz3izufwUvo6bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzU5Lzk1LzAy/LzM2MF9GXzY1OTk1/MDI0MV9OMDNaSTRN/T1BrZHpyOHAyUXNz/VXFYOVYwb1dubnRJ/RC5qcGc'
              alt="Media"
              width={860}
              height={600}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              Media Coverage: Global Conference
            </h2>
            <p className="text-gray-600 mt-2">
              Explore the media coverage of major global conferences and events...
            </p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Explore Media
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-gray-800 text-white py-3 px-6 rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-300">
            See All News & Media
          </button>
        </div>
      </div>

      <h3 className="text-lg font-serif uppercase mb-4 text-gray-700">News And Media</h3>

      <div id="map" className="w-full h-[400px] mt-6 z-20"></div>
    </div>
  );
};

export default LeafletMap;
