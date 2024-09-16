

"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

export default function Home() {
  // Array of image URLs
  const images = [
    'https://imgs.search.brave.com/FfIDej40M9Q9ZQxytqiKUjVsCv7p3gkwTyT-x2yb7po/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9uYXR1cmFsLWRp/c2FzdGVyXzExMzQ5/MDEtMzMyOTcwLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn',  // Add your own image URLs here
    'https://imgs.search.brave.com/krQ3M2kgNdo9hixaKv-HP9YHQT5IfKz3izufwUvo6bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzU5Lzk1LzAy/LzM2MF9GXzY1OTk1/MDI0MV9OMDNaSTRN/T1BrZHpyOHAyUXNz/VXFYOVYwb1dubnRJ/RC5qcGc',
    'https://imgs.search.brave.com/wtoBH0EleU_vhNZ0QzVj_gFYsoScLToDYzHQiFyCsA0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/MjU4NTgzMC9waG90/by93YXItem9uZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MjNmaGhCSDNzbGlw/Y1RfLWdpSjNQWmFI/WW13R0tBd3Y2dTF3/anc4WHJEWT0',
    'https://imgs.search.brave.com/1W5XIs7VlA5cGtBOSV7HpApJdxIgmPDMVI-b5DKHC8g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA4/MzEwNTY3L3Bob3Rv/L2NpdHktYWZ0ZXIt/ZWFydGhxYWtlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1j/SXNnVXRWZjFMWnNC/TmRmSHhad0NteVFN/LXVqM2JGVVZ2WVNo/MWpSTHJvPQ',
  ];


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



  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use effect to change the image after every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='bg-slate-200'>
      {/* Hero Section */}
      <div className='container mx-auto py-8'>
        <div className='text-center mb-6'>
          <h1 className='text-4xl font-bold text-slate-900 mb-4'>
            Welcome to the Crisis Sync Hub
          </h1>
          <p className='text-lg text-slate-700'>
            A platform to help you stay prepared for, respond to, and recover from disasters.
          </p>
          <a href='#features' className='mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 inline-block'>
            Get Started
          </a>
        </div>
        
        {/* Image Slideshow Section */}
        <div className='mb-6'>
          <img
            src={images[currentImageIndex]}  // Dynamically change image source
            alt='Disaster Scene'
            className='w-full h-96 object-cover rounded-lg'
          />
        </div>
      </div>

      {/* Key Features Section */}
      <div className='container mx-auto py-8 bg-white' id='features'>
        <h2 className='text-2xl font-bold text-slate-900 mb-4 text-center'>
          Key Features
        </h2>
        <p className='text-lg text-slate-700 mb-6 text-center'>
          Explore the range of features to keep you informed and prepared.
        </p>

        {/* Feature List */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='p-4 bg-slate-100 rounded-lg'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>Forecasting & Alerts</h3>
            <p className='text-lg text-slate-700'>
              Get the latest weather forecasts and emergency alerts.
            </p>
          </div>
          <div className='p-4 bg-slate-100 rounded-lg'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>Personal Safety</h3>
            <p className='text-lg text-slate-700'>
              Stay informed with personal safety tips during emergencies.
            </p>
          </div>
          <div className='p-4 bg-slate-100 rounded-lg'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>Recovery & Resilience</h3>
            <p className='text-lg text-slate-700'>
              Learn how to recover and rebuild after a disaster.
            </p>
          </div>
          <div className='p-4 bg-slate-100 rounded-lg'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>News & Media</h3>
            <p className='text-lg text-slate-700'>
              Stay updated with the latest news on disasters worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto py-8">
  <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
    What People Are Saying
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Testimonial 1 */}
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg items-center">
      <img 
        src="https://randomuser.me/api/portraits/women/44.jpg" 
        alt="Jane Doe" 
        className="w-16 h-16 rounded-full mb-4 object-cover"
      />
      <p className="text-lg text-slate-700 mb-4 text-center">
        "The Crisis Sync Hub helped my community stay prepared during a recent flood. The alerts were timely, and the safety tips were invaluable. I felt more secure knowing we had access to up-to-date information."
      </p>
      <p className="text-sm text-slate-500">- Jane Doe</p>
      <p className="text-xs text-slate-400">Community Volunteer</p>
    </div>

    {/* Testimonial 2 */}
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg items-center">
      <img 
        src="https://randomuser.me/api/portraits/men/46.jpg" 
        alt="John Smith" 
        className="w-16 h-16 rounded-full mb-4 object-cover"
      />
      <p className="text-lg text-slate-700 mb-4 text-center">
        "I was able to quickly access recovery resources after the earthquake. The platform connected me to the right relief agencies, and I received the help I needed fast. This platform is truly a lifesaver!"
      </p>
      <p className="text-sm text-slate-500">- John Smith</p>
      <p className="text-xs text-slate-400">Disaster Survivor</p>
    </div>
  </div>
</div>


      {/* Real-time Disaster Map */}
      <div className='container mx-auto py-8'>
        <h2 className='text-2xl font-bold text-slate-900 mb-4 text-center'>
          Real-Time Disaster Map
        </h2>
        <div className='w-full h-96 bg-slate-300 rounded-lg flex justify-center items-center'>
          {/* <p className='text-lg text-slate-700'>
            Interactive map showing ongoing disaster events (map integration goes here).
          </p> */}
                <div id="map" className="w-full h-[400px] mt-6"></div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='container mx-auto py-8 bg-slate-100'>
        <h2 className='text-2xl font-bold text-slate-900 mb-4 text-center'>
          Stay Informed
        </h2>
        <div className='flex flex-col sm:flex-row items-center justify-center'>
          <input
            type='email'
            placeholder='Enter your email'
            className='p-3 rounded-lg border border-slate-300 mr-4'
          />
          <button className='mt-2 sm:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
