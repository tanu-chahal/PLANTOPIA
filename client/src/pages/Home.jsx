import Typography from '@mui/material/Typography'
import Box  from '@mui/material/Box'
import Container from '@mui/material/Container'
import React from 'react'

function Home() {
  return (
    <>
    <Container maxWidth='lg' sx={{backgroundColor: "red", display: "flex", justifyContent: "space-between", height: 450, borderRadius: 10}}>
        <Box sx={{alignSelf: "center", mx:5}}><Typography variant='h3'sx={{fontWeight: 900, maxWidth: 300}}>But your dream plants</Typography></Box>
        <Box sx={{backgroundColor: "black", borderRadius: "50% 50% 0 50%", alignSelf: "flex-end", mx: 10}}><img style={{width:"400px", borderRadius: "50%"} }src="/img/pot-2.jpeg" alt="" className="right" /></Box>
    </Container>
    </>
  )
}

export default Home