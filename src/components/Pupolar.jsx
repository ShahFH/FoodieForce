import React, { useEffect } from 'react'

function Pupolar() {
  useEffect(() =>{
    getPopular();
  },[])

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.RECIPE_API_KEY}&number=9`);
    const data = await api.json();
    console.log(data);

  }



  return (
    <div>Pupolar</div>
  )
}

export default Pupolar