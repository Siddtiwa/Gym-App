import { Stack, Typography } from '@mui/material';
import React from 'react';
import Icon from '../assets/icons/gym.png';

export const Bodypart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type={'button'}
      alignItems={'center'}
      justifyContent={'center'}
      className="bodyPart-Card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        cursor: 'pointer',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default Bodypart;
