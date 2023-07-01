import { Box, Button, InputLabel, Modal, TextField, Typography } from "@mui/material"
import { useDataContext } from "../context/DataContext";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const FormModal = () => {
    
    const {open,setOpen,addPost}=useDataContext();
    const handleClose = () => setOpen(false);

    // const [itemData,setItemData]=useState({imgUrl:"",name:"",ingredients:"",instructions:"",cuisine:""})

    const handelSignUp=(event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if(data.get("imgUrl")===""){
            const itemData={
                id:uuidv4(),
                imgUrl:
                "https://picsum.photos/200/200",
                name: data.get("name"),
                ingredients: data.get("ingredients"),
                instructions: data.get("instructions"),
                cuisine: data.get("cuisine"),
               
               }
               addPost(itemData)
               handleClose()

        }
        else{
            const itemData={
                id:uuidv4(),
                imgUrl:
                data.get("imgUrl"),
                name: data.get("name"),
                ingredients: data.get("ingredients"),
                instructions: data.get("instructions"),
                cuisine: data.get("cuisine"),
               
               }
               addPost(itemData)
               handleClose()
        }
    }
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box
            component="form"
            onSubmit={handelSignUp}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              padding: "2rem",
            }}
          >
            <TextField
              size="small"
              halfWidth
              id="imgUrl"
              name="imgUrl"
              type="imgUrl"
              autoFocus
              label="ImgUrl"
            />
        
            <TextField
              size="small"
              halfWidth
              required
              id="name"
              name="name"
              type="name"
              autoFocus
              label="Name"
            />
            
            <TextField
              size="small"
              halfWidth
              required
              id="ingredients"
              name="ingredients"
              type="ingredients"
              autoFocus
              label="Ingredients"
            />
              <TextField
              size="small"
              halfWidth
              required
              id="instructions"
              name="instructions"
              type="instructions"
              autoFocus
              label="Instructions"
            />
              <TextField
              size="small"
              halfWidth
              required
              id="cuisine"
              name="cuisine"
              type="cuisine"
              autoFocus
              label="Cuisine"
            />
            
            <Button
              type="submit"
              halfWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              ADD
            </Button>

            </Box>
        
          </Box>
        
      </Modal>
  )
}
