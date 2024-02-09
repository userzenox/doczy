import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyComponent(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [standard, setStandard] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [section, setSection] = useState("");
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleSchoolSelect = (selectedSchool) => {
    setSchoolName(selectedSchool);
    setShowDropdown(false); // Close the dropdown after selecting a school
  };

  const handleNextClick = () => {
    // Check if all inputs are filled
    if (!schoolName || !standard || !rollNumber || !section) {
      alert("Please fill in all inputs.");
    } else {
      // Proceed to the next page
      // You can navigate to the next page here
      navigate("/signup2");
    }
  };

  return (
    <>
      <div className="div">
        <div className="div-2">DOCZY </div>
        <div className="div-3">Documentation made easy</div>
        <div className="div-4">School Details</div>
        <div className="div-5" onClick={toggleDropdown}>
          <div className="div-6">{schoolName}</div>
          
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f33fc7ca69040019ade28d95e60d5b89d678fa1f01025c074cf133f450ef8265?"
            className={`img ${showDropdown ? "rotate" : ""}`}
          />
          {showDropdown && (
            <div className="dropdown">
              <ul>
                {Array.from({ length: 50 }, (_, i) => i + 1).map((index) => (
                  <li key={index} onClick={() => handleSchoolSelect(`School ${index}`)}>
                    School {index}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="div-7">
          <div className="div-8">Standard</div>
          <input
            type="text"
            placeholder="Enter Standard"
            className="input"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
          />
        </div>
        <div className="div-9">Roll Number</div>
        <input
          type="text"
          placeholder="Enter Roll Number"
          className="input"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <div className="div-11">Section</div>
        <input
          type="text"
          placeholder="Enter Section"
          className="input"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <button className="create-account" onClick={handleNextClick}>
          Next
        </button>
      </div>

      <style jsx>{`
        .dropdown {
          position: absolute;
          top: calc(100% + 5px);
          left: 0;
          background-color: #ffffff;
          border: 1px solid #cccccc;
          border-radius: 4px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
          z-index: 1;
          max-height: 150px;
          overflow-y: auto;
          width:100%;        }
        .dropdown ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .dropdown ul li {
          padding: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .dropdown ul li:hover {
          background-color: #f0f0f0;
        }
        .img {
          aspect-ratio: 1.06;
          object-fit: auto;
          object-position: center;
          width: 16px;
          stroke-width: 1.5px;
          stroke: #585858;
          transition: transform 0.3s ease;
        }
        .rotate {
          transform: rotate(180deg);
        }
        .div {
          border-radius: 15px;
          background-color: #fff;
          display: flex;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          font-size: 16px;
          color: #585858;
          font-weight: 500;
          letter-spacing: 0.4px;
          line-height: 200%;
          margin: 0 auto;
          padding: 44px 40px;
          position: relative;
        }
        .div-2 {
          color: #000;
          letter-spacing: 3.36px;
          align-self: center;
          margin-top: 32px;
          font: 600 48px/67% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-3 {
          letter-spacing: 0.3px;
          align-self: center;
          margin-top: 11px;
          white-space: nowrap;
          font: 600 12px/267% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-4 {
          color: #111727;
          letter-spacing: 0.8px;
          margin-top: 88px;
          font: 32px/100% Poppins, sans-serif;
        }
        .div-5 {
          border-radius: 6px;
          border: 0.5px solid #000;
          background-color: #fff;
          display: flex;
          margin-top: 48px;
          width: 313px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          padding: 14px 30px;
          position: relative;
        }
        .div-6 {
          font-family: Poppins, sans-serif;
          align-self: start;
          flex-grow: 1;
          flex-basis: auto;
        }
        .selected-school {
          flex-grow: 1;
          text-align: right;
        }
        .input {
          border-radius: 5px;
          border: 1px solid #585858;
          margin-top: 13px;
          height: 43px;
        }
        .div-7, .div-9, .div-11 {
          font-family: Poppins, sans-serif;
          line-height: 32px;
          margin-top: 52px;
        }
        .create-account {
          font-family: Poppins, sans-serif;
          align-items: center;
          border-radius: 13px;
          background-color: #111727;
          margin-top: 77px;
          justify-content: center;
          color: #fff;
          white-space: nowrap;
          line-height: 32px;
          padding: 5px 60px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .create-account:hover {
          background-color: #000;
        }
      `}</style>
    </>
  );
}

export default MyComponent;
