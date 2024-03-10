import React, { useState } from 'react';
import { Home as HomeIcon, Search as SearchIcon, Explore as ExploreIcon } from '@mui/icons-material';

import "./Message.css"


import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from 'react-router-dom';
import img5 from "../online-images/Final Logo.jpg";
function Sidenav() {
  const [activeTab, setActiveTab] = useState('instituteRelated');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className='flex-container'>
      <div className="container1">
        <div className="sidenav">
          <img
            className="sidenav__logo"
            src={img5}
            alt="Doczy Logo"
          />

          <div className="sidenav__buttons">
            <Link to="/home" className="sidenav__button">
              <HomeIcon />
              <span> Home </span>
            </Link>

            <Link to="/message" className="sidenav__button">
              <SearchIcon />
              <span>Message</span>
            </Link>

            <Link to="/service" className="sidenav__button">
              <ExploreIcon />
              <span> Service </span>
            </Link>
            <Link to="/Signup" className="sidenav__button">
             
             <span> SignUp</span>
           </Link>
           

         
          </div>

          <div className="sidenav__more">
            <button className="sidenav__button">
              <MenuIcon />
              <span className="sidenav__buttonText">More</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container2">
        {/* Container for the first page content */}
        <div className="page-content">
          {/* Content for the first page */}
          <div className="contain">
        <h1> Coming Soon</h1>
      </div>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Sidenav;
