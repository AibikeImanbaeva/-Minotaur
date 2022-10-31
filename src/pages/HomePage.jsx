import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import AddProduct from "../components/products/AddProduct";
import { useNavigate } from "react-router-dom";
import Logo1 from "../img/HomePageImg/Logo1.png";
import Macarons from "../img/HomePageImg/Macarons.jpg";
import eclairs from "../img/HomePageImg/eclairs.jpg"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


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



    <Card className="sec1_card" style={{ width: '30rem', marginBottom: '2vw' }}>
      <Card.Img variant="top" src="https://kulikov.com/upload/landing/bbb/IMG_2683@1x.jpg" />
      <Card.Body>
        <Card.Title>Десерты в стаканчиках</Card.Title>
        <Card.Text>
        Уникальная коллекция легких нежных десертов на основе мусса и настоящего творога! Современный ритм жизни заставляет нас менять не только образ жизни, но и формат любимых десертов. Десерты в стаканчиках — это удобный формат лакомства, который поможет вам насладиться любимым вкусом «на любой скорости». А полностью натуральный легкий состав оставит только приятное послевкусие.
        </Card.Text>
  
      </Card.Body>
    </Card>
    <Card className="sec1_card" style={{ width: '30rem', marginBottom: '2vw' }}>
      <Card.Img variant="top" src="https://delikates.ua/images/product/2-4.jpg" />
      <Card.Body>
        <Card.Title>Подарочные наборы</Card.Title>
        <Card.Text>
        Широкий выбор роскошных подарочных наборов макаронис различными вкусами. Каждый из наборов имеет индивидуальный внешний вид, и мы продолжаем следовать нашей фундаментальной политике – все изделия ручной работы из натуральных ингредиентов!
        </Card.Text>
  
      </Card.Body>
    </Card>
    
    <Card className="sec1_card" style={{ width: '30rem', marginBottom: '2vw' }}>
      <Card.Img variant="top" src="https://kulikov.com/upload/landing/c65/%D1%87%D0%B8%D0%B7%D0%BA%D0%B5%D0%B9%D0%BA@1x.jpg" />
      <Card.Body>
        <Card.Title>НИКУДА БЕЗ ЧИЗКЕЙКОВ</Card.Title>
        <Card.Text>
        Мы долго искали рецепт идеального чизкейка. Мы его нашли, доработали и создали целое ассорти. Сегодня у нас есть чизкейки разных видов и форматов: для любителей классики и для ценителей домашнего формата и вкуса.

Наши чизкейки на вкус как яркое незабываемое путешествие. О чем уже говорят их названия — "Нью-Йорк", "Париж", "Милан", "Амстердам". Всех их объединяет лишь одно — наша любовь и самые натуральные ингредиенты — настоящие молочные сливки, лучший бельгийский шоколад и джемы из настоящих ягод.
        </Card.Text>
        
      </Card.Body>
    </Card>

   

    <Card className="sec1_card"  style={{ width: '30rem', marginBottom: '2vw' }}>
      <Card.Img variant="top" src="https://kulikov.com/upload/landing/f2b/%D1%82%D0%BE%D1%80%D1%821+1.3_%E2%80%94_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F@1x.jpg" />
      <Card.Body>
        <Card.Title>Европейские торты</Card.Title>
        <Card.Text>
        Разве можно устоять перед изысканностью европейских тортов?

Кусочек "Тирамису"? Он уже здесь, для вас! Мы не могли позволить себе оставить вас без столь популярного европейского торта.

А может "Три шоколада"? Конечно, да! Этот торт уже стал нашей визитной карточкой. Удивительное сочетание натуральных молочных сливок и настоящего бельгийского шоколада.

Любите экспериментировать? Тогда вам стоит попробовать торт "Polly"! Удивительная симфония из сливочного мусса, кусочков кураги, свежих яблок и миндальной основы.
        </Card.Text>
     
      </Card.Body>
    </Card>

      </div>
      
      </div>

   


   
      
      
      </div>
      <section class="section-plans" id="section-plans">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
      Любимая продукция
        </h2>
      </div>

      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front-1">
              <div class="card__title card__title--1">
                <i class="fas fa-paper-plane"></i>
                <h4 class="card__heading">ШОКОЛАДНЫЕ КОНФЕТЫ</h4>
              </div>

              <div class="card__details">
            <p>Мечтали ли вы в детстве открыть коробку шоколадных конфет и перепробовать все-все-все вкусы? А потом выбрать из всего набора только самые вкусные, свои любимые. У кого-то это были конфеты с орехами, у кого-то с жидкой карамельной начинкой, одним нравились конфеты с белым шоколадом, а другим с чем-то хрустящим.

Коробка вкусных шоколадных конфет – это настоящая коробка счастья и приятных детских воспоминаний. А еще это универсальный подарок по любому поводу, поэтому мы постарались создать для вас не только самый натуральный состав, но и приятную подарочную упаковку.</p>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <img src="https://kulikov.com/upload/landing/840/%D0%B0%D1%81%D1%81%D0%BE%D1%80%D1%82%D0%B8_2@1x.jpg" alt="" />
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front-2">
              <div class="card__title card__title--2">
                <i class="fas fa-plane"></i>
                <h4 class="card__heading">
КЛАССИЧЕСКИЕ ПИРОЖНЫЕ</h4>
              </div>

              <div class="card__details">
                <p>Помните те самые пирожные из детства? Например, "Корзинку" из песочного теста с воздушным кремом или, может быть, "Трюфельное" пирожное? А "Медовое" или "Трубочки" с кремом? 

Мы позаботились о том, чтобы вкус наших классических пирожных был максимально похож на наши и ваши детские воспоминания. Помимо вкуса, неизменными мы оставили и натуральные ингредиенты: только натуральные молочные сливки, настоящие орехи и мед, шоколад высокого качества и многое другое. Каждое пирожное мы готовим для вас, как для себя!</p>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  <img src="https://kulikov.com/upload/landing/3dc/%D0%9A%D1%83%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B936@1x.jpg" alt="" />
                </div>
             
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front-3">
              <div class="card__title card__title--3">
                <i class="fas fa-rocket"></i>
                <h4 class="card__heading">Макаронсы</h4>
              </div>

              <div class="card__details">
               <p>Популярный французский десерт изготавливают из натуральной миндальной муки, которая и придает ему такую нежную и хрупкую текстуру. Это непростая кропотливая работа, с которой легко справляются наши кондитеры. Яркие нежные Macarons станут отличным подарком для вашей второй половинки. А натуральность всех ингредиентов, в том числе и красителей, не оставят ни единого повода отказаться от этого лакомства.</p>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                <div class="card__price-box">
                 <img src="https://kulikov.com/upload/landing/389/%D0%9A%D1%83%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B943@1x.jpg" alt="" />
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="u-center-text u-margin-top-huge">
        <a href={'/catalog'} class="btn btn--green">Перейти к ассортименту</a>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default HomePage;
