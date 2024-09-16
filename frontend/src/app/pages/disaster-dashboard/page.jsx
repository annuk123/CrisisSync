"use client";
import React, { useEffect, useState } from 'react';

const DisasterData = () => {
  const [disasterData, setDisasterData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/disaster-data/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Disaster data:', data);  // Log the data to inspect its structure

        // Check if the response contains a 'disasters' key and if it's an array
        if (data && Array.isArray(data.disasters)) {
          setDisasterData(data.disasters);  // Use the 'disasters' array
        } else {
          console.error('Expected an array in the "disasters" key but found:', data.disasters);
        }
      })
      .catch(error => {
        console.error('Error fetching disaster data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Disaster Data Dashboard</h1>
      {disasterData.length === 0 ? (
        <p>No disaster data available</p>
      ) : (
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
                <td className="border px-4 py-2">{item.source || 'Unknown'}</td>
                <td className="border px-4 py-2">{item.category || 'General'}</td>
                <td className="border px-4 py-2">{item.content || 'N/A'}</td>
                <td className="border px-4 py-2">{item.author || 'N/A'}</td>
                <td className="border px-4 py-2">{item.location || 'N/A'}</td>
                <td className="border px-4 py-2">{new Date(item.created_at).toLocaleDateString()}</td>
                <td className="border px-4 py-2">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 cursor-pointer">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisasterData;
