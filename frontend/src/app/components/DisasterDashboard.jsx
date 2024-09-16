// import axios from 'axios';
// import { useState, useEffect } from 'react';

// export default function DisasterDashboard() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/disaster-data/')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Disaster Information Dashboard</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }