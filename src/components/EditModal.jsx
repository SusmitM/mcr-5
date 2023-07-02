import React, { useState } from 'react'
import { Box, Button, InputLabel, Modal, TextField, Typography } from "@mui/material"
import { useDataContext } from "../context/DataContext";

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

export const EditModal = () => {
    const {openEdit, setOpenEdit,itemToEdit,setItemToEdit,editPost}=useDataContext();
    const handleClose = () => {setOpenEdit(false);setItemToEdit("")};
  
    const handelEdit=(event)=>{
        event.preventDefault();
       
        editPost(itemToEdit)
        handleClose()
    }
   
   
  return (

    <Modal
    open={openEdit}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
        Edit item
    <Box
        component="form"
        onSubmit={handelEdit}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          padding: "2rem",
        }}
      >
        <TextField
          sx={{marginTop:"10px"}}
          size="small"
          halfWidth
          id="imgUrl"
          name="imgUrl"
          type="imgUrl"
          autoFocus
          label="ImgUrl"
          value={itemToEdit?.imgUrl}
          onChange={(e)=>setItemToEdit(prev=>({...prev,imgUrl:e.target.value}))}
        />
    
        <TextField
          sx={{marginTop:"10px"}}
          size="small"
          halfWidth
          required
          id="name"
          name="name"
          type="name"
          autoFocus
          label="Name"
          value={itemToEdit?.name}
          onChange={(e)=>setItemToEdit(prev=>({...prev,name:e.target.value}))}
        />
        
        <TextField
          sx={{marginTop:"10px"}}
          size="small"
          halfWidth
          required
          id="ingredients"
          name="ingredients"
          type="ingredients"
          autoFocus
          label="Ingredients"
          value={itemToEdit?.ingredients}
          onChange={(e)=>setItemToEdit(prev=>({...prev,ingredients:e.target.value}))}
        />
          <TextField
            sx={{marginTop:"10px"}}
          size="small"
          halfWidth
          required
          id="instructions"
          name="instructions"
          type="instructions"
          autoFocus
          label="Instructions"
          value={itemToEdit?.instructions}
          onChange={(e)=>setItemToEdit(prev=>({...prev,instructions:e.target.value}))}
        />
          <TextField
            sx={{marginTop:"10px"}}
          size="small"
          halfWidth
          required
          id="cuisine"
          name="cuisine"
          type="cuisine"
          autoFocus
          label="Cuisine"
          value={itemToEdit?.cuisine}
          onChange={(e)=>setItemToEdit(prev=>({...prev,cuisine:e.target.value}))}
        />
        
        <Button
          type="submit"
          halfWidth
          variant="contained"
          sx={{ mt: 3, mb: 1 }}
        >
         Edit
        </Button>

        </Box>
    
      </Box>
    
  </Modal>
  )
}
