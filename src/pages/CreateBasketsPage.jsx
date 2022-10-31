import React from 'react';
import CreateBasketsList  from '../components/CreateBaskets/CreateBasketsList';
import BasketsCard from '../components/CreateBaskets/BasketsCard';
import MacaronsCount from '../components/CreateBaskets/MacaronsCount';
const CreateBasketsPage = () => {
  return (
    <>
    
    <CreateBasketsList />
    <BasketsCard />
    <MacaronsCount />
    </>
  )
}

export default CreateBasketsPage