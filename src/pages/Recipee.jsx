import React from 'react'
import { useEffect, useState } from 'react'
import { Styled } from 'styled-components'
import { useParams } from 'react-router-dom'


function Recipee() {

  const fetchDetails = async () => {
    let params = useParams();
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}information?apiKey=${process.env.REACT_APP_API_KEY}`);
  }

  return (
    <div>Recipee</div>
  )
}

export default Recipee