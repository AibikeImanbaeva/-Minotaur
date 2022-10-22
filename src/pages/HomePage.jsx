import React, { useState } from 'react'
import { useAuth } from "../contexts/AuthContextProvider"
import AddProduct from "../components/products/AddProduct"
import {useNavigate} from "react-router-dom";

const HomePage = () => {
  const [admin, setAdmin] = useState("");
  const { adminBtn } = useAuth()
const navigate = useNavigate()
  return (
    <>
    <div>home page</div>
    {adminBtn ? (<button onClick={()=>navigate('/admin')}>add</button>) : (<></>)}
    </>
  )
}

export default HomePage