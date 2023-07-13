import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Match from './Match';

const Matches = () => {
  const [Matches, setMatches] = useState([]);
  const { categoryId } = useParams(); // If using route parameters

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`API_ENDPOINT_URL/${categoryId}`);
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error('Error fetching ticket list:', error);
      }
    };

    fetchMatches();
  }, [categoryId]); // Add categoryId as a dependency if using route parameters

  return (
    <div>
      {Matches.map((match) => (
        <Match key={match.id} match={match} />
      ))}
    </div>
  );
};

export default Matches;
