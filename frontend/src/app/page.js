"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

export default function Home() {

  const images = [
    'https://imgs.search.brave.com/FfIDej40M9Q9ZQxytqiKUjVsCv7p3gkwTyT-x2yb7po/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9uYXR1cmFsLWRp/c2FzdGVyXzExMzQ5/MDEtMzMyOTcwLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn',  // Add your own image URLs here
    'https://imgs.search.brave.com/z79YlgBnkIEGtrhiQ-uGmLjDbfbeEaCnx1YpSqI9Tj4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzY0LzYyLzI5/LzM2MF9GXzc2NDYy/Mjk4MV90QlJXem9m/dWFxYmlZOW90a3Jq/NHdzZ2wyQWJhWE9z/TC5qcGc',
    'https://imgs.search.brave.com/wtoBH0EleU_vhNZ0QzVj_gFYsoScLToDYzHQiFyCsA0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/MjU4NTgzMC9waG90/by93YXItem9uZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MjNmaGhCSDNzbGlw/Y1RfLWdpSjNQWmFI/WW13R0tBd3Y2dTF3/anc4WHJEWT0',
    'https://imgs.search.brave.com/hzSmzuYdPAzr4snMbMu6Gw2-s2P0xCPgpdkktvtM7fM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/Mzc5MTAwNi9waG90/by9mbG9vZGluZy1y/b2FkLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1WNnpwZVd3/cktlMm13cnUzaEFw/bkRiSDVENlA4eXNE/REN6bGFNa3NhSXRZ/PQ',  // Updated image URL
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
          <Image
            src={images[currentImageIndex]}  // Dynamically change image source
            alt='Disaster Scene'
            className='w-full h-96 object-cover rounded-lg'
            width={800}  // Adjust width as needed
            height={384}  // Adjust height as needed
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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Forecasting & Alerts Section */}
          <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='p-6 flex flex-col items-center'>
              <Image 
                src='https://imgs.search.brave.com/yEJkYvlurxw7XcpcZY8hXr6byTZ872f511Xlb_qYOu8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvd2VhdGhlci04/OTkvNjQveC0xNS0x/MjgucG5n' 
                alt='Forecasting & Alerts' 
                className='w-40 h-40 object-cover rounded-t-lg mb-4'
                width={160}
                height={160}
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
              <Image 
                src='https://imgs.search.brave.com/cUTUtYLdsQW97b5b02u6I9emlyOSOJNnYvkar53vrGk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNzIzMy8xNzIz/MzA2OC5wbmc_c2Vt/dD1haXNfaHlicmlk' 
                alt='Personal Safety' 
                className='w-40 h-40 object-cover rounded-t-lg mb-4'
                width={160}
                height={160}
              />
              <h3 className='text-2xl font-semibold text-slate-900 mb-3'>Personal Safety</h3>
              <p className='text-base text-slate-600 mb-4'>
                Access vital resources and guidelines to ensure your personal safety during crises.
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
              <Image 
                src='https://imgs.search.brave.com/UexTnb-tL9AToyVbNpAILCR0BqnBthVpXlyQ3nTqujU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMzM1MC8xMzM1/MDU3My5wbmc_c2Vt/dD1haXNfaHlicmlk' 
                alt='Recovery & Resilience' 
                className='w-40 h-40 object-cover rounded-t-lg mb-4'
                width={160}
                height={160}
              />
              <h3 className='text-2xl font-semibold text-slate-900 mb-3'>Recovery & Resilience</h3>
              <p className='text-base text-slate-600 mb-4'>
                Find tools and support to aid in recovery efforts and build long-term resilience after a disaster.
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
              <Image 
                src='https://imgs.search.brave.com/z2ybeo0piv_RLrWEwbyPJeAAXDhpGK_neSLGIWPmJFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29oZXNpdHkuY29t/L3dwLWNvbnRlbnQv/bmV3X21lZGlhLzIw/MjMvMDcvcmVwb3J0/LWljb25zLnN2Zw' 
                alt='News & Media' 
                className='w-40 h-40 object-cover rounded-t-lg mb-4'
                width={160}
                height={160}
              />
              <h3 className='text-2xl font-semibold text-slate-900 mb-3'>News & Media</h3>
              <p className='text-base text-slate-600 mb-4'>
                Stay informed with the latest news and media coverage on ongoing crises and recovery efforts.
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
      </div>

      {/* Map Section */}
      <div className='container mx-auto py-8'>
        <h1 className='text-2xl font-bold text-slate-900 mb-4 text-center'>
          Map
        </h1>
        <div id='map' className='w-full h-96 z-20 rounded-lg'></div>
      </div>
    </div>
  );
}
