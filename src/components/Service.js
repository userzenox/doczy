// Sidenav.js
import HomeIcon from '@mui/icons-material/Home';
import "./Message.css"
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react';
import { Link } from 'react-router-dom';
import img5 from "../online-images/Final Logo.jpg";
import  { useState } from 'react';
import './Service.css'


function Sidenav() {
  const [activeTab, setActiveTab] = useState('instituteRelated');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
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
      <div className="nav">
        {/* Institute Related Form */}
        <div className={`nav__button ${activeTab === 'instituteRelated' ? 'active' : ''}`} onClick={() => handleTabChange('instituteRelated')}>
          <HomeIcon />
          <span>Institute Related Form</span>
        </div>
        
        {/* General Queries */}
        <div className={`nav__button ${activeTab === 'generalQueries' ? 'active' : ''}`} onClick={() => handleTabChange('generalQueries')}>
          <SearchIcon />
          <span>General Queries</span>
        </div>
        
        {/* Complaints */}
        <div className={`nav__button ${activeTab === 'complaints' ? 'active' : ''}`} onClick={() => handleTabChange('complaints')}>
          <ExploreIcon />
          <span>Complaints</span>
        </div>
      </div>
              {activeTab === 'instituteRelated' && (
        <div className="page-content">
          <h2>Institute Related Form Page</h2>
          <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2914b4e64aca90a5f7109aed07e2e99e192620dfb567c4d1f453a7216e241ff3?"
            className="img"
          />
          <div className="div-3">Alumni Registration</div>
        </div>
        <div className="div-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2914b4e64aca90a5f7109aed07e2e99e192620dfb567c4d1f453a7216e241ff3?"
            className="img"
          />
          <div className="div-5">Recommendation</div>
        </div>
        <div className="div-6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2914b4e64aca90a5f7109aed07e2e99e192620dfb567c4d1f453a7216e241ff3?"
            className="img"
          />
          <div className="div-7">Bonafied</div>
        </div>
        <div className="div-8">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e3c3e8c2898dfc3bc33305cc3fe79568793336669e5cf5e256d901f5babe64?"
            className="img"
          />
          <div className="div-9">Exam Related</div>
        </div>
        <div className="div-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e3c3e8c2898dfc3bc33305cc3fe79568793336669e5cf5e256d901f5babe64?"
            className="img"
          />
          <div className="div-11">Internship</div>
        </div>
        <div className="div-12">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e3c3e8c2898dfc3bc33305cc3fe79568793336669e5cf5e256d901f5babe64?"
            className="img"
          />
          <div className="div-13">Admission</div>
        </div>
        <div className="div-14">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e3c3e8c2898dfc3bc33305cc3fe79568793336669e5cf5e256d901f5babe64?"
            className="img"
          />
          <div className="div-15">Scholarships</div>
        </div>
        <div className="div-16">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e3c3e8c2898dfc3bc33305cc3fe79568793336669e5cf5e256d901f5babe64?"
            className="img"
          />
          <div className="div-17">Leave Application</div>
        </div>
        <div className="div-18">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e3c3e8c2898dfc3bc33305cc3fe79568793336669e5cf5e256d901f5babe64?"
            className="img"
          />
          <div className="div-19">Mentor</div>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          max-width: 293px;
          padding-bottom: 16px;
          flex-direction: column;
          font-size: 16px;
          color: #2b1212;
          font-weight: 500;
          letter-spacing: 1.36px;
          line-height: 40px;
        }
        .div-2 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 26px;
          fill: #030303;
          margin: auto 0;
        }
        .div-3 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
        }
        .div-4 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-5 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
        }
        .div-6 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-7 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-8 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          padding: 5px 32px;
        }
        .div-9 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-10 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-11 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-12 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          color: #000;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-13 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-14 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-15 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-16 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-17 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
        }
        .div-18 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-19 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
      `}</style>
        </div>
      )}

      {activeTab === 'generalQueries' && (
        <div className="page-content">
          <h2>General Queries Page</h2>
          <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ed16b4d4677877fc98290d8be3cf0a188ce29c1c9502ab1a00b5dcc7752db8e?"
            className="img"
          />
          <div className="div-3">Hostel Queries</div>
        </div>
        <div className="div-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ed16b4d4677877fc98290d8be3cf0a188ce29c1c9502ab1a00b5dcc7752db8e?"
            className="img"
          />
          <div className="div-5">Student Queries</div>
        </div>
        <div className="div-6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ed16b4d4677877fc98290d8be3cf0a188ce29c1c9502ab1a00b5dcc7752db8e?"
            className="img"
          />
          <div className="div-7">Academic Queries</div>
        </div>
        <div className="div-8">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ed16b4d4677877fc98290d8be3cf0a188ce29c1c9502ab1a00b5dcc7752db8e?"
            className="img"
          />
          <div className="div-9">Institute Queries</div>
        </div>
        <div className="div-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ed16b4d4677877fc98290d8be3cf0a188ce29c1c9502ab1a00b5dcc7752db8e?"
            className="img"
          />
          <div className="div-11">Department Queries</div>
        </div>
        <div className="div-12">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/935e263d914086a28b28436ea42649b437a45731fb269b2af03cbcbaa555eee6?"
            className="img"
          />
          <div className="div-13">Other Queries</div>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          max-width: 296px;
          flex-direction: column;
          font-size: 16px;
          color: #000;
          font-weight: 500;
          letter-spacing: 1.36px;
          line-height: 40px;
        }
        .div-2 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 5px 32px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 46px;
        }
        .div-3 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-4 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-5 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .div-6 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-7 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .div-8 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-9 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .div-10 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 32px;
        }
        .div-11 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .div-12 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          padding: 5px 32px;
        }
        .div-13 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
      `}</style>
        </div>
      )}

      {activeTab === 'complaints' && (
        <div className="page-content">
          <h2>Complaints Page</h2>
          <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3171271536f74a29b13095de884668e235ed6eae713abc9d611be8a58052597?"
            className="img"
          />
          <div className="div-3">Hostel Complaints</div>
        </div>
        <div className="div-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3171271536f74a29b13095de884668e235ed6eae713abc9d611be8a58052597?"
            className="img"
          />
          <div className="div-5">Student Complaints</div>
        </div>
        <div className="div-6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3171271536f74a29b13095de884668e235ed6eae713abc9d611be8a58052597?"
            className="img"
          />
          <div className="div-7">Infrastructure Complaints</div>
        </div>
        <div className="div-8">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3171271536f74a29b13095de884668e235ed6eae713abc9d611be8a58052597?"
            className="img"
          />
          <div className="div-9">Academic Complaint</div>
        </div>
        <div className="div-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3171271536f74a29b13095de884668e235ed6eae713abc9d611be8a58052597?"
            className="img"
          />
          <div className="div-11">Ragging Complaint</div>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          max-width: 343px;
          flex-direction: column;
          font-size: 16px;
          color: #000;
          font-weight: 500;
          letter-spacing: 1.36px;
          line-height: 40px;
        }
        .div-2 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 5px 15px;
        }
        .img {
          aspect-ratio: 1.16;
          object-fit: auto;
          object-position: center;
          width: 44px;
          fill: #000;
          align-self: start;
        }
        .div-3 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-4 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          padding: 5px 15px;
        }
        .div-5 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-6 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
          padding: 5px 15px;
        }
        .div-7 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
        }
        .div-8 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          padding: 5px 15px;
        }
        .div-9 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-10 {
          border-radius: 11px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          justify-content: space-between;
          gap: 20px;
          padding: 5px 15px;
        }
        .div-11 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
      `}</style>
        </div>
      )}
      </div>

    </div>
    
  );
}

export default Sidenav;
