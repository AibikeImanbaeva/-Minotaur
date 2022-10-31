import React from 'react';

import telegram from "./icons/telegram.svg";
import vk from "./icons/VK.svg";
import instagram from "./icons/INST.svg";
import "../../styles/Footer.css";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return <footer >
        <div className="container">
            <div className="footer-right">
                <div className="footer__logo">
                    <img src="https://d.wattpad.com/story_parts/694124829/images/15825c1f140909d7491378560656.png" alt="" />
                </div>
                <ul className='footer__list'>
                    <li className='footer__item'><a onClick={() => navigate("/catalog")}>Каталог</a></li>
                    <li className='footer__item'><a onClick={() => navigate("/about")}>О нас</a></li>
                    <li className='footer__item'><a onClick={() => navigate("/pay")}>Оплата доставка</a></li>
                    <li className='footer__item'><a onClick={() => navigate("/contacts")}>Контакты</a></li>
                </ul>
            </div>
            <div className="footer-left">
                <div className="footer-rules">
                    <p>Пользовательское соглашение</p>
                    <p>Политика конфиденциальности</p>
                </div>
                <div className="footer-share">
                    <ul>
                        <li>
                            <a>
                                <img src={vk} alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={telegram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;