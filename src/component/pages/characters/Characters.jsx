
import axios from "axios";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import CardCharacter from "../../common/cardCharacter/CardCharacter";


//import axios from "axios"
//import * as React from 'react';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
//import { CardActionArea } from '@mui/material';


const Characters = () => {

  const[characters, setCharacters] = useState([])

  useEffect(() => {

    //fetch("https://rickandmortyapi.com/api/character")
    //  .then( res => res.json()) // en esta oparte se parsea
    //  .then( res => setCharacters(res.results))

    axios.get("https://rickandmortyapi.com/api/character")
        .then( res => setCharacters(res.data.results))
      
  }, [])

  console.log(characters)

  return(
    <>
      <Typography variant="h2" color="primary" align="center">Personajes</Typography>
      <div style={{
        background:"yellow",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "2px"
      }}> 
        {
          characters.map(( character )=>{
            return <CardCharacter character={character} key={character.id}/>;
              
            
          })
        }
      </div>
    </>

  )
};

export default Characters;
