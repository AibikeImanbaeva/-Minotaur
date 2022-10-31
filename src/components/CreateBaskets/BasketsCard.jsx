import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useBaskets } from "../../contexts/BasketsContextProvider";
import { useParams} from 'react-router-dom'
import BasketCount from "./BasketCount";

const BasketsCard = () => {
  const { getBaskets, baskets, getCardId, basketCount} = useBaskets();
  useEffect(() => {
    getBaskets();
  }, []);




const [count, setCount] = useState(0)


function handleCount(){
  setCount(count+1)
}

  return (
    <>
      <div>
        {baskets?.map((item) => (
          <Card style={{ width: "18rem" }} key={item.id} onClick={handleCount}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button onClick={() => getCardId(item.id)}>+</Button>
            </Card.Body>
          </Card>
        ))}

        <h2>{count}</h2>
      </div>
    </>
  );
};

export default BasketsCard;
