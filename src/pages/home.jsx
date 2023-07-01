import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDataContext } from "../context/DataContext";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ItemCard } from "../components/itemCard";
import { FormModal } from "../components/FormModal";

export const Home = () => {
 
 const {value, setValue,setOpen,recipe}=useDataContext();
 const[searchValue,setSearchValue]=useState("");
 const[searchedItems,setSearchedItems]=useState([]);
 

 const ItemsToShow=searchValue==="" ? recipe:searchedItems
 const handleOpen = () => setOpen(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const searchItem=(text)=>{
    
    setSearchValue(text)
    const requiredItems=recipe?.filter(data=>data[value].toLowerCase().includes(text.toLowerCase()))
    console.log(searchValue)
    setSearchedItems(requiredItems);

  }

  return (
    <Box>
      <FormModal/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "baseline",
        }}
      >
        <Box>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="outlined"
            size="small"
            onChange={(e)=>searchItem(e.target.value)}

          />
        </Box>
  
        <Box>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Filters:</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="name"
                control={<Radio />}
                label="Name"
              />
              <FormControlLabel value="ingredients" control={<Radio />} label="Ingredients" />
              <FormControlLabel
                value="cuisine"
                control={<Radio />}
                label="Cuisine"
              />
            </RadioGroup>
          </FormControl>
         
        </Box>
      </Box>
      <Typography variant="h4">All Recipes:</Typography>

      <Box sx={{display:"flex"}}>
        <Box sx={{height:"15px",width:"15px",border:"1px solid black",padding:"10px"}} onClick={handleOpen}>
          <AddCircleIcon />
        </Box>
        <Box sx={{display:"flex"}}>
          {ItemsToShow?.length===0 && <Typography>No Items found</Typography>}
          {ItemsToShow?.map(itemData=>
            
              <ItemCard key={itemData.id} itemData={itemData}/>
            
              
            
          )}
       
        </Box>
      </Box>
      
    </Box>
  );
};
