import React, { useEffect, useState } from 'react';
import MoveRequest from './MoveRequest';
import './MyMoves.css';

function MyMoves() {
  const [moveData, setMoveData] = useState([]);

  useEffect(() => {
    fetch('http://test.api.boxigo.in/sample-data/')
      .then(response => response.json())
      .then(data => {
        setMoveData(data.Customer_Estimate_Flow);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="my-moves">
      <h2>My Moves</h2>
      {moveData.map((move, index) => (
        <MoveRequest key={index} move={move} />
      ))}
    </div>
  );
}

export default MyMoves;
