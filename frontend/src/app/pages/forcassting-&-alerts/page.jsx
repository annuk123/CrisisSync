"use client";

import {React, useState} from 'react';
import Link from 'next/link';
//import { useState, useEffect } from 'react';

const ForecastingAndAlerts = () => {
  const [filter, setFilter] = useState('all'); // State to store the selected filter

  // Disaster alert data for different types of disasters
  const disasterData = [
    {
      type: 'earthquake',
      title: 'Real-Time Earthquake Alerts',
      description: 'Stay informed with up-to-the-minute earthquake alerts to help protect your family and property.',
      link: '/pages/earthquake',
    },
    {
      type: 'flood',
      title: 'Flood Forecasting',
      description: 'Monitor flood risk in your area and take action before rising waters threaten your home and safety.',
      link: '/pages/flood-forecasting',
    },
    {
      type: 'wildfire',
      title: 'Wildfire Warnings',
      description: 'Receive alerts about wildfires in your region and take measures to ensure your safety.',
      link: '/pages/wildfires',
    },
    {
      type: 'hurricane',
      title: 'Hurricane Forecasts',
      description: 'Stay updated on hurricane predictions and be prepared for any potential threats to your area.',
      link: '/pages/hurricanes',
    },
    // Add more disaster types as needed
  ];

  // Filtered disaster alerts based on user selection
  const filteredDisasters = filter === 'all' ? disasterData : disasterData.filter(disaster => disaster.type === filter);


  return (
    <div className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 bg-slate-200 p-6`}>
      {/* Title */}
      <h3 className="text-lg font-serif uppercase tracking-wider text-center mb-3 mt-14">
        Forecasting & Alerts
      </h3>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-custom mx-auto max-w-3xl text-center">
        By offering early warnings and detailed weather predictions, we help you prepare for and respond to severe weather conditions, ensuring you have the information needed to make timely and informed decisions for your safety.
      </h1>

      {/* Breadcrumb Navigation */}
      <div className="mt-12 relative">
        <nav className="flex text-sm text-gray-600 space-x-2 z-20">
        
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/pages/forcasting-&-alerts" className="hover:text-blue-600">Forecasting & Alerts</Link>
        </nav>
      </div>

      {/* Navigation Menu */}
      <main>
        <nav className={`bg-gray-200 text-black shadow-md p-3 sm:p-5 w-full top-0 rounded-2xl mt-10 sticky `}>
          <div className="flex flex-row justify-between sm:justify-center space-x-6 overflow-x-auto">
            <button onClick={() => setFilter('all')} className="text-sm hover:text-blue-600 font-semibold transition-colors duration-300">Crisis</button>
            <button onClick={() => setFilter('earthquake')} className="text-sm hover:text-blue-600 font-semibold transition-colors duration-300">Earthquake</button>
            <button onClick={() => setFilter('flood')} className="text-sm hover:text-blue-600 font-semibold transition-colors duration-300">Flood Forecasting</button>
            <button onClick={() => setFilter('wildfire')} className="text-sm hover:text-blue-600 font-semibold transition-colors duration-300">Wildfires</button>
            <button onClick={() => setFilter('hurricane')} className="text-sm hover:text-blue-600 font-semibold transition-colors duration-300">Hurricanes</button>
          </div>
        </nav>
      </main>

      {/* Display filtered disaster alerts */}
      <div className="mt-12 w-full max-w-3xl space-y-6">
        {filteredDisasters.map((disaster, index) => (
          <section key={index} className="p-6 bg-gray-200 text-black shadow-md rounded-xl transition-shadow duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold">{disaster.title}</h2>
            <p className="mt-2 text-sm text-gray-800">{disaster.description}</p>
            <Link href={disaster.link} className="inline-block mt-3 text-blue-600 hover:underline">Learn More</Link>
          </section>
        ))}
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default ForecastingAndAlerts;
