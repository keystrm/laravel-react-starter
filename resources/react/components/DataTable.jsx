import React, { useState, useEffect } from 'react';
import apiService from '../utills/apiService';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService.get('/fetch-data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>User Id</th>
          <th>ID</th>
          <th>TITLE</th>
          <th>POST</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            {/* Add more fields as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
