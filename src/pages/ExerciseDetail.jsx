import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Details from '../components/Details';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/SimilarExercises';
import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData';

export const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(()=> {
    const fetchExercisesData = async ()=> {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`, youtubeOptions);
            setExerciseVideos(exerciseVideoData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equimentExercisesData);
    }
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail = {exerciseDetail}/>
      <ExerciseVideo exerciseVideos = {exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}