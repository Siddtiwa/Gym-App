import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

export const HeroBanner = () => {
  return (
    <div>
    <Box sx={{
      mt: {lg: '20px', xs: '30px'},
      ml: {sm: '50px'}
    }} position={'relative'} p={'20px'}>
      <Typography color={'#FF2625'} fontWeight={'600'} fontSize={'26px'}>Fitness Club</Typography>
      <Typography fontWeight={'700'} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb='23px' mt='30px'>Sweat, Smile <br/> and repeat</Typography>
      <Typography fontSize={'22px'} lineHeight={'35px'} mb={3}>Check out the most effective exercises</Typography>
      <Button variant='contained' color='error' href='#exercises' sx={{background: '#ff2625', padding: '10px'}}>Explore Exercises</Button>
      <Typography fontWeight={'600'} color={'#ff2625'} sx={{opacity: 0.1, display:{lg:'block', xs:'none'}}}
      fontSize={'200px'}>Exercise</Typography>
      <img src={HeroBannerImage} style={{
      position: 'absolute', 
      top: 0,               
      right: '400px',              
      width: '25%',       
      height: '100%',       
    }} alt='Hero-Banner' className='Hero-Banner-Image'></img>
      </Box>
    </div>
  )
}

export default HeroBanner