import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import AddProduct from "../components/products/AddProduct";
import { useNavigate } from "react-router-dom";
import Logo1 from "../img/HomePageImg/Logo1.png";
import Macarons from "../img/HomePageImg/Macarons.jpg";
import eclairs from "../img/HomePageImg/eclairs.jpg"
import Navbar from '../components/Navbar/Navbar'


//custom

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const HomePage = () => {
  const [admin, setAdmin] = useState("");
  const { adminBtn } = useAuth();
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
      {adminBtn ? (
        <button onClick={() => navigate("/admin")}>add</button>
      ) : (
        <></>
      )}

{/* <h4>НАША ПРОДУКЦИЯ</h4> */}
      {/* <button onClick={() => navigate("/catalog")}>Посмотреть каталог</button>  */}
      
<div className="homepage " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

     <div className="section_1">

      <br /> 
      <div className="section_1__card">

      <Card style={{ width: '30rem', marginBottom: '2vw' }}>
      <Card.Img  variant="top" src="https://balthazar.club/uploads/posts/2022-03/1646184583_1-balthazar-club-p-pirozhnoe-makaruni-1.jpg" />
      <Card.Body>
        <Card.Title>Макаронсы</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem', marginBottom: '2vw' }}>
      <Card.Img variant="top" src="https://balthazar.club/uploads/posts/2022-03/1646184583_1-balthazar-club-p-pirozhnoe-makaruni-1.jpg" />
      <Card.Body>
        <Card.Title>Эклеры</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
  
      </Card.Body>
    </Card>
    <Card style={{ width: '30rem', marginBottom: '2vw' }}>
      <Card.Img variant="top" src="https://balthazar.club/uploads/posts/2022-03/1646184583_1-balthazar-club-p-pirozhnoe-makaruni-1.jpg" />
      <Card.Body>
        <Card.Title>Подарочные наборы</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
  
      </Card.Body>
    </Card>
    
    <Card style={{ width: '30rem', marginBottom: '2vw' }}>
      <Card.Img variant="top" src="https://balthazar.club/uploads/posts/2022-03/1646184583_1-balthazar-club-p-pirozhnoe-makaruni-1.jpg" />
      <Card.Body>
        <Card.Title>Карамель на палочке</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem', marginBottom: '2vw' }}>
      <Card.Img variant="top" src="https://balthazar.club/uploads/posts/2022-03/1646184583_1-balthazar-club-p-pirozhnoe-makaruni-1.jpg" />
      <Card.Body>
        <Card.Title>Вафельные трубочки</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
  
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem', marginBottom: '2vw' }}>
      <Card.Img variant="top" src="https://balthazar.club/uploads/posts/2022-03/1646184583_1-balthazar-club-p-pirozhnoe-makaruni-1.jpg" />
      <Card.Body>
        <Card.Title>Десерт картошка</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
     
      </Card.Body>
    </Card>

      </div>
      
      </div>

      <div className="section_2">

      </div>


   
      
      
      </div>
    </>
  );
};

export default HomePage;
