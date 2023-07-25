import { Typography } from '@mui/material'
import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (

    <>
        <Typography variant='h3' align= "center" style={{
          background:"#fc6f03",
          
        }}>Home</Typography>
        <Typography variant='h2' align='center' style={{
          background:'#7165bf'
        }}>
          <Link to="/characters" >Ver personajes</Link>
        </Typography>
    </>
    
  )
}

export default Home
