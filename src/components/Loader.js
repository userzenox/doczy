import React from 'react';
import './loader.css';
import img1 from '../online-images/loader1.png';

const Loader = () => {
  return (
    <div className="loader-container">
      <img
        loading="lazy"
        src={img1}
        alt="Loading..."
        className="loader-img"
      />
      <div className="loader-text">
        <h2>All Your Documentation in One Place</h2>
        <div className="loader-animation">
       
        </div>
      
      </div>
    </div>
  );
}

export default Loader;
