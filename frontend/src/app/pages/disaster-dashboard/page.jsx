"use client";
import React, { useEffect, useState } from 'react';

const DisasterData = () => {
  const [disasterData, setDisasterData] = useState([]);

  // Fetch disaster data from the Django backend
  useEffect(() => {
    fetch('http://localhost:8000/api/disaster-data/')
      .then(response => response.json())
      .then(data => setDisasterData(data.disasters))
      .catch(error => console.error('Error fetching disaster data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Disaster Data Dashboard</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Source</th>
            <th className="py-2">Category</th>
            <th className="py-2">Content</th>
            <th className="py-2">Author</th>
            <th className="py-2">Location</th>
            <th className="py-2">Date</th>
            <th className="py-2">Link</th>
          </tr>
        </thead>
        <tbody>
          {disasterData.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.source}</td>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">{item.content}</td>
              <td className="border px-4 py-2">{item.author || 'N/A'}</td>
              <td className="border px-4 py-2">{item.location}</td>
              <td className="border px-4 py-2">{new Date(item.created_at).toLocaleDateString()}</td>
              <td className="border px-4 py-2">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisasterData;
