import { useParams } from 'react-router-dom';
import { useDataContext } from '../context/DataContext';
import { Box, Paper, Typography } from '@mui/material';

export const SingleItem = () => {
  const {recipe}=useDataContext();
  const {postId}= useParams();
  
  const selectedPost= recipe?.find(data=>data?.id===postId)
 
  return (
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Typography>{selectedPost?.name}</Typography>
      <Paper  sx={{display:"flex",width:"450px",marginTop:"25px"}}>
        <Box>  <img src={selectedPost?.imgUrl} alt="itemImage"/></Box>
        <Box>
          <Typography>Cuisine: {selectedPost?.cuisine}</Typography>
          <Typography>Ingredients: {selectedPost?.ingredients}</Typography>
          <Typography>Instructions: {selectedPost?.instructions}</Typography>

        </Box>
      </Paper>
    </Box>
  )
}
