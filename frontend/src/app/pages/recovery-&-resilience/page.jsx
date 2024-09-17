"use client";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
// import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import Image from 'next/image';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const images = [
  'https://imgs.search.brave.com/FfIDej40M9Q9ZQxytqiKUjVsCv7p3gkwTyT-x2yb7po/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9uYXR1cmFsLWRp/c2FzdGVyXzExMzQ5/MDEtMzMyOTcwLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn',  // Add your own image URLs here
];

const RecoveryResilience = () => {
  const [isClient, setIsClient] = useState(false);

  const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Bar = dynamic(() => import('react-chartjs-2').then(mod => mod.Bar), { ssr: false });


  useEffect(() => {
    // Set the flag to true only on the client side
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 p-6">

      <h3 className="text-lg font-serif uppercase mb-4 text-gray-700">
        Recovery and Resilience
      </h3>

      {/* Image Rendering */}
      <div className="max-w-3xl mx-auto mb-6">
        <Image 
          src={images[0]} 
          alt="Disaster Recovery" 
          width={860} 
          height={500} 
          className="rounded-lg shadow-lg w-full h-auto" 
        />
      </div>

      <h1 className="text-3xl font-custom text-center text-gray-900 mb-4">
        Welcome to Recovery and Resilience Hub
      </h1>
      <p className="mt-4 text-lg text-gray-800 leading-relaxed mb-6">
        Explore resources, tools, and guides to help communities recover and build resilience in the face of disasters.
      </p>

      {/* Interactive Map (Rendered only on client-side) */}
      {isClient && (
        <div className="w-full max-w-4xl mb-6">
        {/* // <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 p-6 pt-20"> */}

          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                Disaster Event Location. <br /> More details here.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}

      {/* Data Visualization (Sample Chart) */}
      <div className="w-full max-w-4xl mb-6 hidden">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disaster Statistics</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Bar
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
              datasets: [
                {
                  label: 'Cases',
                  data: [12, 19, 3, 5, 2],
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>




      {/* Resource Search */}
      <div className="w-full max-w-4xl mb-6">
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full p-3 border rounded-lg shadow-md"
        />
      </div>

      {/* Authentication Check (Example) */}
      <div className="w-full max-w-4xl">
        <a
          href="/login"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default RecoveryResilience;



