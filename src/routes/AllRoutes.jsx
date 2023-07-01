import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { SingleItem } from "../pages/singleItem"



export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/singleItem/:postId" element={<SingleItem/>}/>
    </Routes>
    </>
  )
}
