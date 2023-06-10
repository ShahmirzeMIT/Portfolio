import styles from '../index.css';
import { FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

import {BsArrowDownCircle,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsReddit,
} from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  MenuList,
  Modal,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import { DataContext, LanguageContext } from '../App';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [headmenu, setHeadMenu] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const value = useContext(DataContext);
  const menu = value.data
  useEffect(() => {
    fetch("./assets/json/headerMenu.json")
      .then((resp) => resp.json())
      .then((data) => setHeadMenu(data.data))
  }, [])

  const [lang, setLang] = useContext(LanguageContext);

  return (
<>
  <header id="home">
    <nav>
      <div className="menu wd80head">
        <div>
          <img src="assets/img/logo.png" alt="Logo" />
        </div>
        <div className="rightList">
          <ul>
            <li className="fs12">
              <FaPhoneAlt /> (994) 055 698 45 46
            </li>
            <li className='dropdown-container1'>
              <select className='langSlct' onChange={(e) => { setLang(e.target.value) }}>
                <option value="en">En</option>
                <option value="az">Az</option>
                <option value="ru">Ru</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="content wd-80 p4em">
      <div className="openword">
        {menu && menu.length > 0 &&
          menu.map((item, i) =>
            item.name.startsWith("head") && item.id === 4 ?
              <div key={i}>
                <h1 className={`${lang === 'az' ? 'fs28' : ''}`}>
                  {item[lang]}
                </h1>
              </div>
              : null
          )
        }
        <div className="typewriter">
          <Typewriter
            options={{
              strings: menu && menu.length > 0 ? menu
                .filter((item) => item.name.startsWith("headType"))
                .map((item) => item[lang]) : [],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p>
          {menu && menu.length > 0 ?
            menu
              .filter((item) => item.name.startsWith('headL'))
              .map((item) => item[lang])
            :
            ''
          }
        </p>
        <div className="contact">
          
          <a href="#works">
            {menu && menu.length > 0 ?
              menu
                .filter((item) => item.name.startsWith('headW'))
                .map((item) => item[lang])
              :
              ''
            }
          </a>
          <a href="#contact">
            {menu && menu.length > 0 ?
              menu
                .filter((item) => item.name.startsWith('slagContact'))
                .map((item) =><>{item[lang]} <span>
                <BsArrowDownCircle />
              </span></>)
              :
              ''
            }
           
          </a>
        </div>
      </div>
      <div className="face">
        <div className="image">
          <img src="./assets/img/greencard.jpeg" alt="Green Card" />
        </div>
      </div>
    </div>
    <div className="scroll">
      <a href="#know">
        <AiOutlineArrowDown className="animasiya" />
      </a>
    </div>
  </header>
</>


  );
};

export default Header;
