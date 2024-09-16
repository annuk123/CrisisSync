

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
        </div>


<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
  {/* Forecasting & Alerts Section */}
  <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
    <div className='p-6 flex flex-col items-center'>
      <img 
        src='https://imgs.search.brave.com/yEJkYvlurxw7XcpcZY8hXr6byTZ872f511Xlb_qYOu8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvd2VhdGhlci04/OTkvNjQveC0xNS0x/MjgucG5n' 
        alt='Forecasting & Alerts' 
        className='w-40 h-40 object-cover rounded-t-lg mb-4'
      />
      <h3 className='text-2xl font-semibold text-slate-900 mb-3'>Forecasting & Alerts</h3>
      <p className='text-base text-slate-600 mb-4'>
        Stay ahead of the storm with real-time weather forecasts and emergency alerts designed to keep you safe.
      </p>
      <a 
        href='/pages/forcassting-&-alerts' 
        className='text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-semibold'
      >
        Explore Forecasting & Alerts
      </a>
    </div>
  </div>

  {/* Personal Safety Section */}
  <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
    <div className='p-6 flex flex-col items-center'>
      <img 
        src='https://imgs.search.brave.com/cUTUtYLdsQW97b5b02u6I9emlyOSOJNnYvkar53vrGk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNzIzMy8xNzIz/MzA2OC5wbmc_c2Vt/dD1haXNfaHlicmlk' 
        alt='Personal Safety' 
        className='w-40 h-40 object-cover rounded-t-lg mb-4'
      />
      <h3 className='text-2xl font-semibold text-slate-900 mb-3'>Personal Safety</h3>
      <p className='text-base text-slate-600 mb-4'>
        Learn essential safety tips to protect yourself and your family during emergencies and disasters.
      </p>
      <a 
        href='/pages/personal-safety' 
        className='text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-semibold'
      >
        Explore Personal Safety
      </a>
    </div>
  </div>

  {/* Recovery & Resilience Section */}
  <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
    <div className='p-6 flex flex-col items-center'>
      <img 
        src='https://imgs.search.brave.com/4J_h52r3ey5zgop9HNPeHtbKfebPjItDPrUX4MbNg7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29oZXNpdHkuY29t/L3dwLWNvbnRlbnQv/bmV3X21lZGlhLzIw/MjMvMDcvYmxvZy1p/Y29ucy5zdmc' 
        alt='Recovery & Resilience' 
        className='w-40 h-40 object-cover rounded-t-lg mb-4'
      />
      <h3 className='text-2xl font-semibold text-slate-900 mb-3'>Recovery & Resilience</h3>
      <p className='text-base text-slate-600 mb-4'>
        Discover strategies for recovery and resilience to help you rebuild after a disaster strikes.
      </p>
      <a 
        href='/pages/recovery-&-resilience' 
        className='text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-semibold'
      >
        Explore Recovery & Resilience
      </a>
    </div>
  </div>

  {/* News & Media Section */}
  <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
    <div className='p-6 flex flex-col items-center'>
      <img 
        src='https://imgs.search.brave.com/QzWjjwiMRR7X2NxeSfHK3CPBjeWFV1dR2rpbTKoJolg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4Lzk4LzY3LzA1/LzM2MF9GXzg5ODY3/MDU0Nl92REp0QmdO/ZkRaMzdqVlRVNzN0/c2pKaE9VQ0lJUDAw/TS5qcGc' 
        alt='News & Media' 
        className='w-40 h-40 object-cover rounded-t-lg mb-4'
      />
      <h3 className='text-2xl font-semibold text-slate-900 mb-3'>News & Media</h3>
      <p className='text-base text-slate-600 mb-4'>
        Stay updated with the latest global disaster news, reports, and media coverage.
      </p>
      <a 
        href='/pages/news-&-media' 
        className='text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-semibold'
      >
        Explore News & Media
      </a>
    </div>
  </div>
</div>





      {/* Testimonials Section */}
      <div className="container mx-auto py-8">
  <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center">
    What People Are Saying
  </h1>
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
