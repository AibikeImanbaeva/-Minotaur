import React, { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { ACTIONS, API_BASKETS } from "../helpers/consts";


export const basketsContext = createContext();
export const useBaskets =() => useContext(basketsContext);


const INIT_STATE = {
    baskets: [],
    basketCount: [],
   
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_BASKETS:
        return { ...state, baskets: action.payload };
      case ACTIONS.GET_BASKETS_COUNT:
        return {...state, basketsCount: action.payload}
        default:
        return state;
    }
  };



  const BasketsContextProvider  = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
const [basketCount, setBasketCount] = useState([])
const [arr, setArr] =useState([])





const getBaskets = async () => {
  const { data } = await axios(`${API_BASKETS}`)
  dispatch ({
    type: ACTIONS.GET_BASKETS,
    payload: data,
  })
  
}

async function getCardId(id){
     
      let res = await axios(`${API_BASKETS}/${id}`)
    //  arr = {res}
    // setBasketCount(res.data.image)
    // setArr(basketCount)
    const newCount = basketCount.push({link:res.data.image, id});
    setBasketCount([...basketCount, newCount].flat())

    
      console.log(basketCount)
    };





const value = {
    getBaskets,
    baskets: state.baskets,
    getCardId,
    basketCount,
   
}

    return (
        <basketsContext.Provider value={value}>{children}</basketsContext.Provider>
      )
  }


  export default BasketsContextProvider