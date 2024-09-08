import { useState, useEffect } from 'react'
import { Box, Button, Stack, Typography, TextField } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { HorizontalScrollbar } from './HorizontalScrollbar'

export const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(()=> {
    const fetchExerciseData = async()=> {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExerciseData();
  } ,[])
  const handleSearch = async()=> {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (exercises) => exercises.name.toLowerCase().includes(search)||
        exercises.target.toLowerCase().includes(search)||
        exercises.equipment.toLowerCase().includes(search)||
        exercises.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack width={'100%'} alignItems={'center'} mt={'37px'} justifyContent={'center'} p={'20px'}>
      <Typography fontWeight={700} sx={{fontSize:{lg: '44px', xs: '30px'}}} mb={'50px'} textAlign={'center'}>
        Awesome exercises You <br/> should know
      </Typography>
      <Box position={'relative'} mb={'72px'}>
        <TextField sx={{
          input:{
            fontWeight: '700',
            border: 'none',
            borderRadius: '4px'
          },
          width: {lg: '800px', xs:'350px'},
          backgroundColor: '#fff',
          borderRadius: '40px' 
        }} height={'76px'} value={search} onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} placeholder='Search Exercises' type='text'/>
        <Button className="search-btn"
        sx={{
          bgcolor:'#FF2625',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '75px', xs: '80px'},
          fontSize: { lg: '20px', xs:'14px'},
          height: '56px',
          position: 'absolute',
          right: '0px'
        }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p:'20px' }}>
            <HorizontalScrollbar data = {bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}
            isBodyParts></HorizontalScrollbar>
      </Box>
    </Stack>
  )
}

export default SearchExercises

