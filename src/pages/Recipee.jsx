import React from 'react'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'


function Recipee() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [actveTab, setAcitveTab] = useState("Instructions");

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  },[])


  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info >
        <Button className={actveTab === 'Instructions' ? 'active' : ''} onClick={() => setAcitveTab("Instructions")}>Instructions</Button>
        <Button className={actveTab === 'Ingredients' ? 'active' : ''} onClick={() => setAcitveTab("Ingredients")}>Ingredients</Button>
        {actveTab === "Instructions" && (
        <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>)}
        {actveTab === "Ingredients" && (
        <ul>
          {details.extendedIngredients.map((Ingredient) =>(
            <li key={Ingredient.id}>{Ingredient.original}</li>
          ))}
        </ul>)}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
  }

  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipee