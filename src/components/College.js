import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const College = () => {
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [collegeName, setCollegeName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [year, setYear] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [section, setSection] = useState("");
  const navigate = useNavigate();

  const toggleCollegeDropdown = () => {
    setShowCollegeDropdown((prevState) => !prevState);
  };

  const toggleCourseDropdown = () => {
    setShowCourseDropdown((prevState) => !prevState);
  };

  const toggleYearDropdown = () => {
    setShowYearDropdown((prevState) => !prevState);
  };

  const handleCollegeSelect = (selectedCollege) => {
    setCollegeName(selectedCollege);
    setShowCollegeDropdown(false); // Close the dropdown after selecting a college
  };

  const handleCourseSelect = (selectedCourse) => {
    setCourseName(selectedCourse);
    setShowCourseDropdown(false); // Close the dropdown after selecting a course
  };

  const handleYearSelect = (selectedYear) => {
    setYear(selectedYear);
    setShowYearDropdown(false); // Close the dropdown after selecting a year
  };

  const handleNextClick = () => {
    // Check if all inputs are filled
    if (!collegeName || !courseName || !year || !registrationNumber || !section) {
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
        <div className="div-4">College Details</div>
        <div className="menu-container">
          <div className="div-5" onClick={toggleCollegeDropdown}>
            <div className="div-6">College Name</div>
            <div className="selected-college">{collegeName}</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f33fc7ca69040019ade28d95e60d5b89d678fa1f01025c074cf133f450ef8265?"
              className={`img ${showCollegeDropdown ? "rotate" : ""}`}
            />
          </div>
          {showCollegeDropdown && (
            <div className="dropdown-container">
              <div className="dropdown">
                <ul>
                  {Array.from({ length: 50 }, (_, i) => i + 1).map((index) => (
                    <li key={index} onClick={() => handleCollegeSelect(`College ${index}`)}>
                      College {index}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="menu-container">
          <div className="div-7" onClick={toggleCourseDropdown}>
            <div className="div-8">Course Name</div>
            <div className="selected-course">{courseName}</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f33fc7ca69040019ade28d95e60d5b89d678fa1f01025c074cf133f450ef8265?"
              className={`img ${showCourseDropdown ? "rotate" : ""}`}
            />
          </div>
          {showCourseDropdown && (
            <div className="dropdown-container">
              <div className="dropdown">
                <ul>
                  <li onClick={() => handleCourseSelect("Course 1")}>Course 1</li>
                  <li onClick={() => handleCourseSelect("Course 2")}>Course 2</li>
                  <li onClick={() => handleCourseSelect("Course 3")}>Course 3</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="menu-container">
          <div className="div-9" onClick={toggleYearDropdown}>
            <div className="div-10">Year</div>
            <div className="selected-year">{year}</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f33fc7ca69040019ade28d95e60d5b89d678fa1f01025c074cf133f450ef8265?"
              className={`img ${showYearDropdown ? "rotate" : ""}`}
            />
          </div>
          {showYearDropdown && (
            <div className="dropdown-container">
              <div className="dropdown">
                <ul>
                  <li onClick={() => handleYearSelect("Year 1")}>Year 1</li>
                  <li onClick={() => handleYearSelect("Year 2")}>Year 2</li>
                  <li onClick={() => handleYearSelect("Year 3")}>Year 3</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="div-11">Registration Number</div>
        <input
          type="text"
          placeholder="Enter Registration Number"
          className="input"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
        <div className="div-13">Section</div>
        <input
          type="text"
          placeholder="Enter Section"
          className="input"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <div className="div-14">
          
        </div>
        <button className="div-17" onClick={handleNextClick}>
          Create account
        </button>
      </div>
      <style jsx>{`
       .menu-container {
        position: relative;
      }
      .dropdown-container {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
      }
      .div {
        border-radius: 15px;
        background-color: #fff;
        display: flex;
        max-width: 480px;
        width: 100%;
        flex-direction: column;
        margin: 0 auto;
        padding: 44px 39px;
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
        color: #585858;
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
        font: 500 32px/100% Poppins, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      .div-5 {
        border-radius: 6px;
        border: 0.5px solid #000;
        background-color: #fff;
        display: flex;
        margin-top: 39px;
        justify-content: space-between;
        gap: 20px;
        font-size: 16px;
        color: #585858;
        font-weight: 500;
        letter-spacing: 0.4px;
        line-height: 200%;
        padding: 13px 31px;
      }
      .div-6 {
        font-family: Poppins, sans-serif;
        flex-grow: 1;
        flex-basis: auto;
      }
      .img {
        aspect-ratio: 1.06;
        object-fit: auto;
        object-position: center;
        width: 16px;
        stroke-width: 1.5px;
        stroke: #585858;
        align-self: start;
      }
      .div-7 {
        border-radius: 6px;
        border: 0.5px solid #000;
        background-color: #fff;
        display: flex;
        margin-top: 52px;
        justify-content: space-between;
        gap: 20px;
        font-size: 16px;
        color: #585858;
        font-weight: 500;
        letter-spacing: 0.4px;
        line-height: 200%;
        padding: 14px 31px;
      }
      .div-8 {
        font-family: Poppins, sans-serif;
        align-self: start;
        flex-grow: 1;
        flex-basis: auto;
      }
      .img-2 {
        aspect-ratio: 1.06;
        object-fit: auto;
        object-position: center;
        width: 16px;
        stroke-width: 1.5px;
        stroke: #585858;
      }
      .div-9 {
        border-radius: 6px;
        border: 0.5px solid #000;
        background-color: #fff;
        display: flex;
        margin-top: 52px;
        justify-content: space-between;
        gap: 20px;
        font-size: 16px;
        color: #585858;
        font-weight: 500;
        white-space: nowrap;
        letter-spacing: 0.4px;
        line-height: 200%;
        padding: 14px 31px;
      }
      .div-10 {
        font-family: Poppins, sans-serif;
      }
      .img-3 {
        aspect-ratio: 1.06;
        object-fit: auto;
        object-position: center;
        width: 16px;
        stroke-width: 1.5px;
        stroke: #585858;
      }
      .div-11 {
        color: #585858;
        letter-spacing: 0.4px;
        margin-top: 27px;
        font: 500 16px/32px Poppins, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      .div-12 {
        border-radius: 5px;
        border: 1px solid #585858;
        height: 43px;
      }
      .div-13 {
        color: #585858;
        letter-spacing: 0.4px;
        margin-top: 22px;
        font: 500 16px/200% Poppins, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      .div-14 {
        display: flex;
        margin-top: 13px;
        justify-content: space-between;
        gap: 11px;
      }
      .div-15 {
        border-radius: 5px;
        border: 1px solid #585858;
        width: 149px;
        height: 43px;
      }
      .div-16 {
        border-radius: 5px;
        border: 1px solid #585858;
        width: 149px;
        height: 43px;
      }
      .div-17 {
        align-items: center;
        border-radius: 13px;
        background-color: #111727;
        margin-top: 47px;
        justify-content: center;
        color: #fff;
        white-space: nowrap;
        letter-spacing: 0.4px;
        padding: 5px 60px;
        font: 500 16px/32px Poppins, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
        .container {
          max-width: 480px;
          margin: 0 auto;
          padding: 44px 39px;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .title {
          font-weight: 600;
          font-size: 48px;
          line-height: 67%;
          color: #000;
          letter-spacing: 3.36px;
        }
        .subtitle {
          font-weight: 600;
          font-size: 12px;
          line-height: 267%;
          color: #585858;
          letter-spacing: 0.3px;
        }
        .content {
          background-color: #fff;
          padding: 30px;
          border-radius: 15px;
        }
        .menu {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .menu-item {
          position: relative;
        }
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
          width: 100%;
        }
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
        .input-container {
          margin-bottom: 20px;
        }
        .input-label {
          font-weight: 500;
          font-size: 16px;
          line-height: 200%;
          color: #585858;
          letter-spacing: 0.4px;
          margin-bottom: 10px;
        }
        .input {
          border-radius: 5px;
          border: 1px solid #585858;
          height: 43px;
          width: 100%;
          padding: 10px;
        }
        .create-account {
          background-color: #111727;
          color: #fff;
          border: none;
          border-radius: 13px;
          padding: 10px 30px;
          font-weight: 500;
          font-size: 16px;
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

export default College;
