import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MotorcycleList.css';

const MotorcycleList = () => {
  const [motorcycles, setMotorcycles] = useState([]);

  useEffect(() => {
    const fetchMotorcycles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/motorcycles');
        setMotorcycles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMotorcycles();
  }, []);

  return (
    <div>
      <h1>Motorcycle List</h1>
      <ul>
        {motorcycles.map((motorcycle) => (
          <li key={motorcycle.id}>
            <strong>{motorcycle.make} {motorcycle.model}</strong>
            <p>Engine Displacement: {motorcycle.engineDisplacement}</p>
            <p>Horsepower: {motorcycle.horsepower}</p>
            <p>Torque: {motorcycle.torque}</p>
            <p>Weight: {motorcycle.weight}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MotorcycleList;
