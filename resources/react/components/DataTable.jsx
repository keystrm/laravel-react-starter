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
          <th>Field 1</th>
          <th>Field 2</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.field1}>
            <td>{item.field1}</td>
            <td>{item.field2}</td>
            {/* Add more fields as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
