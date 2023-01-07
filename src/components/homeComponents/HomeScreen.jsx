import React from 'react'
import AdBanner from './AdBanner'
import {useEffect, useState} from 'react'
import axios from "axios"
import RecipeContainer from './RecipeContainer'

const HomeScreen = () => {
  const [recipies, setRecipies] = useState([])
  
  
  const getRecipies = () => {
    axios.get(`https://recipes.devmountain.com/recipes`)
    .then (res => setRecipies(res.data))
    .catch (err => console.log(err))
  }

  useEffect(getRecipies, [])

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
      <RecipeContainer recipes={recipies} />
      
    </div>
  )
}

export default HomeScreen