// Sidenav.js
import HomeIcon from '@mui/icons-material/Home';
import "./Home.css"
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react';
import { Link } from 'react-router-dom';
import img5 from "../online-images/Final Logo.jpg"

function Sidenav() {
  return (
    <div className='home1'>
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

          <Link to="/notifications" className="sidenav__button">
            <FavoriteBorderIcon />
            <span>Notifications</span>
          </Link>
        </div>

        <div className="sidenav__more">
          <button className="sidenav__button">
            <MenuIcon />
            <span className="sidenav__buttonText">More</span>
          </button>
        </div>
      </div>

      <div className="home_pg">
        <button>hello</button>
      </div>
    </div>
  );
}

export default Sidenav;
