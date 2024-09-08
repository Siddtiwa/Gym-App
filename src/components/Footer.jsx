import { Stack, Box, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png'

export const Footer = () => {
  return (
    <Box mt={'80px'} color={'black'}>
      <Stack gap={'40px'} alignItems={'center'} px={'40'} pt={'24px'}>
        <img src={Logo} alt='Logo' width='200px' height='20px'/>
        <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
            Made with love by Siddhant Tiwari
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer;