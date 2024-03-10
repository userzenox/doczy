// Sidenav.js
import HomeIcon from '@mui/icons-material/Home';
import "./Home.css"
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react';
import { Link } from 'react-router-dom';
import img5 from "../online-images/Final Logo.jpg";



function Sidenav() {
  
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
        {/* Container for the first page content */}
        <div className="page-content">
      
    <div>
      <div className="sections" id="section-1">
        <div id="non-logo">
          <h1>DOCZY</h1>
          <h3>Documentaion made ezy</h3>
       
        </div>
        {/* <div id="logo">
          <img src={img5} alt="" srcSet="" />
        </div> */}
      </div>
      <div className="sections" id="section-2">
        <div className="topics" id="advantages">
          <div id="adv-block">
            <h1>Advantages</h1>
            <p>
              ☛ Optimized Document Management <br /><br />
              ☛ Effortless Submissions <br /><br />
              ☛ Ensured Data Security <br />
            </p>
          </div>
        
        </div>
        <div className="topics" id="what">
          <div id="what-image" className="block-img">
            {/* <img src="images/what.jpg" alt="" srcset=""> */}
          </div>
          <div id="what-block">
            <h1>What Sets Us Apart</h1>
            <p>
              ☛ All-Encompassing Solution: Doczy integrates document storage, organization, and submissions into a unified platform. <br /> <br />
              ☛ User-Friendly Interface: Our intuitive design caters to individuals of all technological proficiencies. <br /> <br />
              ☛ Commitment to Privacy: Robust encryption safeguards user data and ensures privacy. <br /> <br />
              {/* ☛ Primary Focus: <br /> <br />
                    
              ⦿ Educational Institutions: Universities, Schools, Colleges <br />
              ⦿ Future Expansion: Healthcare and Government Sectors</p> */}
            </p>
          </div>
        </div>
        <div className="topics" id="how">
          <div className="topics" id="how">
            <div id="how-block">
              <h1>How it works</h1>
              <p>
                ☛ Subscription-Based Plans : Tailored pricing models to suit each institution's requirements.<br /> <br />
                ☛ Personalization and Extra Features : Supplementary functionalities for tailored experiences.<br /> <br />
                ☛ Data Analysis and Valuable Insights: Value-added services for data-driven decision-making.<br /><br />
                ☛ Cutting-Edge Technology<br />
                {/* ⦿ Doczy harnesses the latest advancements:<br /><br />
                • Blockchain: For secure data storage<br />
                • Decentralized Storage (IPFS, Arweave, Filecoin): Enhanced data resilience<br />
                • Cloud Infrastructure: Scalable and accessible 24/7<br />
                • Encryption Approaches: Public Key Cryptography and Hash Functions</p> */}
              </p>
            </div>
            <div id="how-image" className="block-img">
              
            </div>
          </div>
        </div>
      </div>

      <div id="comming-soon">
        <h1>LAUNCHING SOON</h1>
      </div>

      <div className="sections" id="drop-down">
        <div className="accordion">

          <div className="acc12">
            <div className="accordion-item">
              <div className="accordion-header">Our Vision +</div>
              <div className="accordion-content">
                Doczy is a cutting-edge document management platform designed to streamline tasks for educational institutions. It simplifies document handling, submissions, and access. To learn more, visit our "How It Works" section.
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">Plans +</div>
              <div className="accordion-content">
                ⦿Educational Institutions: Universities, Schools, Colleges <br /><br />
                ⦿Future Expansion: Healthcare and Government Sectors
              </div>
            </div>
          </div>


          <div className="acc12">
            <div className="accordion-item">
              <div className="accordion-header">Security and Privacy +</div>
              <div className="accordion-content">
                We prioritize your data security and privacy. We employ state-of-the-art encryption techniques and adhere to rigorous compliance standards to ensure your information is safe.
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header">Technology +</div>
              <div className="accordion-content">
                • Blockchain: For secure data storage <br /><br />
                • Decentralized Storage (IPFS, Arweave, Filecoin): Enhanced data resilience <br /><br />
                • Cloud Infrastructure: Scalable and accessible 24/7 <br /><br />
                • Encryption Techniques: Public Key Cryptography and Hash Functions <br /><br />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="ceo-cont">
        <div id="ceo">
          <h1>Certainly, here's a concise "About the Founder" section</h1>
          <div id="ceo-2">
            <div id="ceo-img"></div>
            <div id="ceo-text">
              Sudipta Padhi <br />
              Founder & CEO, Doczy <br /> <br />
              Sudipta Padhi, a student at VSSUT, Burla, is the visionary behind Doczy. Inspired by the challenges of traditional paperwork and documentation, Sudipta's mission is to digitalize India and simplify documentation for all. Join us in this transformative journey.
            </div>
          </div>
          <div id="ceo-nav">
            <a href="https://www.instagram.com/itz_me_speaking/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/sudiptapadhi282004/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="mailto:sudiptapadhi28@gmail.com" className="social-icon">
              <i className="fa-regular fa-envelope icon" id="icon"></i>
            </a>

            <i className="fa-solid fa-phone" style={{ cursor: 'pointer' }}>+919438024437</i>
          </div>
        </div>
      </div>

      <div id="contact-us">
        <a href="https://instagram.com/doczydoc?igshid=MzRlODBiNWFlZA==" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://youtube.com/@doczy4u?si=ouCSt_n4Z4VUaexw" target="_blank">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="https://www.linkedin.com/company/97224178/admin/feed/posts/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="mailto:doczydoc@gmail.com" className="social-icon">
          <i className="fa-regular fa-envelope icon" id="icon"></i>
        </a>
      </div>
    </div>
          
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
