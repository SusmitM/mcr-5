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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ItemCard } from "../components/itemCard";
import { FormModal } from "../components/FormModal";
import { EditModal } from "../components/EditModal";

export const Home = () => {
  const { setOpen, recipe } = useDataContext();
  //values of checkbox
  const [value, setValue] = useState("name");
  //values of search
  const [searchValue, setSearchValue] = useState("");

  let ItemsToShow = recipe;
  if (searchValue) {
    const requiredItems = recipe?.filter((data) =>
      data[value].toLowerCase().includes(searchValue.toLowerCase())
    );
    ItemsToShow = requiredItems;
  }

  const handleOpen = () => setOpen(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const searchItem = (text) => {
    setSearchValue(text);
  };

  return (
    <Box>
      <FormModal />
      <EditModal />
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
            onChange={(e) => searchItem(e.target.value)}
          />
        </Box>

        <Box>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Filters:
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="name" control={<Radio />} label="Name" />
              <FormControlLabel
                value="ingredients"
                control={<Radio />}
                label="Ingredients"
              />
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

      <Box sx={{ display: "flex" }}>
        <Box onClick={handleOpen}>
          <AddCircleIcon
            sx={{
              height: "2rem",
              width: "2rem",
            }}
          />
        </Box>
        <Box sx={{ display: "flex",flexWrap:"wrap" }}>
          {ItemsToShow?.length === 0 && <Typography>No Items found</Typography>}
          {ItemsToShow?.map((itemData) => (
            <ItemCard key={itemData.id} itemData={itemData} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
