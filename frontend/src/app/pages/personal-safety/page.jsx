"use client";

import React from 'react';

const PersonalSafety = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-8">
        <h3 className="text-lg font-serif uppercase text-gray-700 mb-2">
          Personal Safety
        </h3>
        <h1 className="text-4xl font-bold text-gray-900 mx-auto max-w-4xl">
          Empower yourself with knowledge and strategies to stay safe and respond effectively to potential risks in your daily life.
        </h1>
      </div>

      <main className="text-center mb-12">
        <image 
          src="https://imgs.search.brave.com/k9ZvbMNgAKwtj_ESlKvTDE0bWRzWKUT8Zs6wqfAZZwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/OTU2MzM2Mi9waG90/by9hcm15LWRvY3Rv/ci13aXRoLWNpdmls/aWFucy1hZnRlci1u/YXR1cmFsLWRpc2Fz/dGVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz02WDNrc281/RC1YWFJfelZWOUZu/TGdlNzB4TUpIV2V0/di1mbnNwSV9nV2xB/PQ" 
          alt="Personal Safety" 
          className="mx-auto mb-6 rounded-lg shadow-lg" 
        />
        <p className="text-lg max-w-3xl mx-auto mb-6 text-gray-700">
          Personal safety involves understanding and preparing for various risks in your everyday life. Follow these tips to ensure you&apos;re ready for emergencies and can handle unexpected situations effectively.
        </p>
        
        <section className="my-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Safety Tips and Strategies</h2>
          <ul className="list-disc list-inside mx-auto max-w-xl text-left text-gray-700">
            <li><strong>Emergency Preparedness:</strong> Create an emergency plan, know your contacts, and have a go-bag ready.</li>
            <li><strong>Personal Safety:</strong> Stay aware of your surroundings, avoid risky areas, and trust your instincts.</li>
            <li><strong>Home Safety:</strong> Secure your home with alarms, locks, and security devices.</li>
          </ul>
        </section>
        
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
          <p className="text-lg mb-4 text-gray-700">For more information, visit the following resources:</p>
          <ul className="list-disc list-inside mx-auto max-w-xl text-left text-gray-700">
            <li><a href="https://www.ready.gov" className="text-blue-600 hover:underline">Ready.gov - Emergency Preparedness</a></li>
            <li><a href="https://www.redcross.org" className="text-blue-600 hover:underline">Red Cross - Safety Resources</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PersonalSafety;

