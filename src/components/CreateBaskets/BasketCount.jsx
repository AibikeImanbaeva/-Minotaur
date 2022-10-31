import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useBaskets } from "../../contexts/BasketsContextProvider";

const BasketCount = () => {
  const { basketCount} = useBaskets();
  let key = Date.now()

  return (
    <div>
        {basketCount?.map((item) => (
                <Card.Img variant="top" key={item.id} src={item.link} />
        ))}
    </div>
  )
}

export default BasketCount