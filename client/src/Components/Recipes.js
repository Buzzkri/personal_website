import React, {useState, useEffect } from 'react';
import { Popup, Card } from 'semantic-ui-react';
import axios from 'axios';


const Recipes = () => {
  const [recipes, setRecipe] = useState([1,2,3,4,5]);


   useEffect(()=>{
    axios.get(`/api/recipes`)
    .then(res=>{setRecipe(res.data)})
    console.log(recipes)
  },[])

  return (
   recipes.map( r => (
     <Card> {r} </Card>
   ))
  )
  // <h1>Hello World</h1> )
}

export default Recipes;