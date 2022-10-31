import React, {useEffect, useState, useContext} from 'react';
import {useSearchParams} from 'react-router-dom';
import { useBaskets} from '../../contexts/BasketsContextProvider';
import BasketsCard from './BasketsCard';

const CreateBasketsList = () => {

  const { baskets, getBaskets } = useBaskets();


  useEffect(()=>{
    getBaskets()
  },[])
  

  return (
   <>
   {baskets?(
    baskets.map(item=> (
      <BasketsCard  key={item.id} item={item} />
    )

     
    )
   ):(
    <h3>loading</h3>
   )}
   
    

   </>
  )
}

export default CreateBasketsList