import { createContext, useContext, useEffect, useState } from "react";
//
const DataContext= createContext();

export const DataContextProvider=({children})=>{
    //initial Recipe state
    const [recipe,setRecipe]=useState([
      {
        "id": "999ba639-12df-4418-84b0-bb2a0d419f20",
        "imgUrl": "https://picsum.photos/200/200",
        "name": "Spaghetti",
        "ingredients": "Noodles, water etc",
        "instructions": "cook evenly",
        "cuisine": "Italian"
      },
      {
        "id": "0a2fce67-d5d7-4a84-b08b-af41675021d4",
        "imgUrl": "https://picsum.photos/200/200",
        "name": "Fried Rice",
        "ingredients": "Rice",
        "instructions": "Cook Fast on high flame",
        "cuisine": "Indian"
      },
      {
        "id": "9f05b318-f3b4-4ce8-b537-d81a7c62d2b9",
        "imgUrl": "https://picsum.photos/200/200",
        "name": "Burger",
        "ingredients": "Bun and chicken",
        "instructions": "Fry fell",
        "cuisine": "American"
      }
    ]);
    
    //state of modal
    const [open, setOpen] =useState(false);
    //state of editmodal
    const [openEdit, setOpenEdit] =useState(false);
    //item to edit
    const [itemToEdit,setItemToEdit]=useState("");

    const localStorageRecipes = localStorage.getItem('foodRecipes');
  const getRecipe=()=>{
    if (localStorageRecipes) {
        setRecipe(JSON.parse(localStorageRecipes)) ;
      } else {
        localStorage.setItem('foodRecipes', JSON.stringify(recipe));
      }
  }

    const addPost=(itemData)=>{
        const updatedRecipes=[...recipe,itemData];
        localStorage.setItem('foodRecipes', JSON.stringify(updatedRecipes));
       setRecipe(updatedRecipes);
    }
    const deletePost=(itemData)=>{
      const updatedRecipes=recipe.filter(({id})=>id!==itemData?.id);
      localStorage.setItem('foodRecipes', JSON.stringify(updatedRecipes));
     setRecipe(updatedRecipes);
  }

  const editPost=(updatedItemData)=>{
    const updatedRecipes=recipe.map((data)=>data?.id===updatedItemData?.id ? updatedItemData : data);
    localStorage.setItem('foodRecipes', JSON.stringify(updatedRecipes));
     setRecipe(updatedRecipes);

  }
    
    useEffect(()=>getRecipe(),[])
    
    return(
        <DataContext.Provider value={{open, setOpen,addPost,deletePost,recipe,setRecipe,openEdit, setOpenEdit,itemToEdit,setItemToEdit,editPost}}>
            {children}
        </DataContext.Provider>
    )
}


export const useDataContext=()=>useContext(DataContext);


