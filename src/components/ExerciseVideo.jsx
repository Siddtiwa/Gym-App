import { Box, Stack, Typography } from '@mui/material'

export const ExerciseVideo = ({exerciseVideos, name}) => {
  return (
    <Box sx={{ marginTop: {lg:'203px', xs:'20px'} }} p={'20px'}>
      <Typography>
        Watch <span style={{color:'#ff2624', textTransform:'capitalize'}}>{name}</span> exercise video
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0,4)?.map((item, index)=> (<a
          key={index}
          className='exercise-video'
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title}/>
          <Box>
            <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000"> 
                {item.video.title}
            </Typography>
            <Typography fontSize="14px" color="#000">
                {item.video.channelName}
            </Typography>
          </Box>
        </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideo