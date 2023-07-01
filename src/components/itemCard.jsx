import { Box, Link, Paper, Typography } from "@mui/material"
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
export const ItemCard = ({itemData}) => {
    const {deletePost,openEdit, setOpenEdit}=useDataContext();
    const navigate=useNavigate();

    const navigateToDetails=()=>{
        navigate(`/singleItem/${itemData?.id}`)
    }
    const handleOpen = () => setOpenEdit(true);
   
  return (
   <Paper sx={{width:"200px",margin:"10px"}}elevation={5}>
    <Box sx={{display:"flex"}}>
        
        <Box onClick={handleOpen}><CreateIcon/></Box>
        <Box onClick={()=>deletePost(itemData)}><DeleteIcon/></Box>

    </Box>
    <Box>
        <img src={itemData?.imgUrl} alt="itemImage"/>
    </Box>
    <Box>
        <Typography>Cuisine Type: {itemData?.name}</Typography>
        <Typography>Ingredients: <Link onClick={navigateToDetails}>See Details</Link></Typography>
        <Typography>Instructions: <Link onClick={navigateToDetails}>See Details</Link></Typography>
    </Box>
   </Paper>
  )
}
