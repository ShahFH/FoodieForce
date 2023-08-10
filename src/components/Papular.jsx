import React, { useEffect, useState } from 'react';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPopular(data.recipes)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {popular.map((recipe) =>{
        return (
          <div>
          <p>{recipe.title}</p>
          </div>
          )
      })}
    </div>
  );
} 

export default Popular;
