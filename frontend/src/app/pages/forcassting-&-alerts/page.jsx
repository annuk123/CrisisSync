"use client";

import React from 'react';
import Link from 'next/link';

const ForecastingAndAlerts = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 p-6">
    <h3 className="text-lg font-serif uppercase mb-4">
      Forecasting & Alerts
    </h3>
<h1 className="text-3xl font-custom mx-auto max-w-3xl text-center">
By offering early warnings and detailed weather predictions, we help you prepare for and respond to severe weather conditions, ensuring you have the information needed to make timely and informed decisions for your safety.
</h1>
<main>
<nav className="bg-white text-black shadow-md p-3 sm:p-4 w-full sticky top-0 z-50 rounded-2xl mt-14">
  <div className="flex flex-row space-x-6">
    <Link href="/pages/earthquake" className="text-sm hover:text-gray-600 font-semibold">Crisis</Link>
    <Link href="/pages/earthquake" className="text-sm hover:text-gray-600 font-semibold">Earthquake</Link>
    <Link href="/pages/flood-forcasting" className="text-sm hover:text-gray-600 font-semibold">Flood Forecasting</Link>
    <Link href="/pages/wildfires" className="text-sm hover:text-gray-600 font-semibold">Wildfires</Link>
    <Link href="/pages/hurricanes" className="text-sm hover:text-gray-600 font-semibold">Hurricanes</Link>
  </div>
</nav>


</main>


  </div>
  
  );
};

export default ForecastingAndAlerts;