import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup2 = () => {
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [instituteType, setInstituteType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Event handlers to update state on user input change
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  };

  const handleInstituteTypeChange = (type) => {
    setInstituteType(type);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSubmit = () => {
    // Check if all required fields are filled
    if (!gender || !dob || !email || !confirmEmail || !instituteType) {
      alert("Please fill in all fields"); // Show warning message
      return; // Exit early if any field is empty
    }

    // Check if emails match
    if (email !== confirmEmail) {
      alert("Emails do not match"); // Show warning message
      return; // Exit early if emails do not match
    }



    // Depending on the selected institute type, navigate to the appropriate route
    if (instituteType === "College") {
      navigate("/college");
    } else if (instituteType === "School") {
      navigate("/school");
    } else if (instituteType === "Coaching") {
      navigate("/coaching");
    }
  };

  return (
    <>
      <div className="div">
        <div className="div-2">DOCZY </div>
        <div className="div-3">Documentation made easy</div>
        <div className="div-4">Basic Details</div>
        <div className="div-5">
          <div className="div-6">
            <div className="div-7">Gender</div>
            <div className="div-8">Date of Birth</div>
          </div>
          <div className="div-9">
            <div className="div-10">
              <div className="div-11">
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={handleGenderChange}
                />
                Male
              </div>
              <div className="div-12">
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={handleGenderChange}
                />
                Female
              </div>
            </div>
            <div className="div-13">
              <input
                type="date"
                value={dob}
                onChange={handleDobChange}
                className="div-14"
              />
            </div>
          </div>
        </div>
        <div className="div-15">Email</div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="div-16"
        />
        <div className="div-17">Confirm Email</div>
        <input
          type="email"
          value={confirmEmail}
          onChange={handleConfirmEmailChange}
          className="div-18"
        />
        <div className="div-19">
          <div className="div-20">Institute Type</div>
          <div className="dropdown-container">
            <div className="dropdown-header" onClick={toggleDropdown}>
              {instituteType || "Select"}
            </div>
            {dropdownOpen && (
              <div className="dropdown-content">
                <div
                  className="dropdown-item"
                  onClick={() => handleInstituteTypeChange("School")}
                >
                  School
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleInstituteTypeChange("College")}
                >
                  College
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleInstituteTypeChange("Coaching")}
                >
                  Coaching
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="div-22" onClick={handleSubmit}>
          Proceed
        </button>
      </div>

      <style jsx>{`
        .div-22 {
          border: none;
          border-radius: 8px;
          background-color: #333;
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          padding: 10px 20px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 20px; /* Adjust margin-top as needed */
        }

        .div-22:hover {
          background-color: #555; /* Darken the background color on hover */
        }

        .dropdown-container {
          position: relative;
          width: 150px; /* Adjust dropdown width as needed */
        }

        .dropdown-header {
          border-radius: 5px;
          border: 1px solid #585858;
          height: 43px;
          line-height: 43px;
          padding: 0 10px;
          cursor: pointer;
        }

        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: #fff;
          border: 1px solid #585858;
          border-top: none;
          border-radius: 0 0 5px 5px;
        }

        .dropdown-item {
          padding: 10px;
          cursor: pointer;
        }

        .dropdown-item:hover {
          background-color: #f0f0f0;
        }

        .div {
          border-radius: 15px;
          background-color: #fff;
          display: flex;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          color: #585858;
          font-weight: 500;
          margin: 0 auto;
          padding: 47px 40px;
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
          display: flex;
          margin-top: 49px;
          justify-content: space-between;
          gap: 20px;
          font-weight: 600;
          white-space: nowrap;
        }

        .div-6 {
          align-self: start;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          font-size: 16px;
          letter-spacing: 0.4px;
          line-height: 200%;
        }

        .div-7 {
          font-family: Poppins, sans-serif;
        }

        .div-8 {
          font-family: Poppins, sans-serif;
          margin-top: 64px;
        }

        .div-9 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }

        .div-10 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          font-size: 16px;
          letter-spacing: 0.4px;
          line-height: 200%;
        }

        .div-11 {
          font-family: Poppins, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }

        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 21px;
          align-self: stretch;
        }

        .div-12 {
          font-family: Poppins, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }

        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 17px;
          stroke-width: 1.5px;
          stroke: #585858;
          align-self: stretch;
          margin: auto 0;
        }

        .div-13 {
          display: flex;
          margin-top: 44px;
          padding-right: 11px;
          justify-content: space-between;
          gap: 12px;
          font-size: 12px;
          text-align: center;
          letter-spacing: 0.3px;
          line-height: 267%;
        }

        .div-14 {
          font-family: Poppins, sans-serif;
          border-radius: 6px;
          border: 2px solid #898181;
          background-color: #fff;
          flex-grow: 1;
          justify-content: center;
          padding: 11px 14px;
        }

        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 29px;
          align-self: start;
        }

        .div-15 {
          letter-spacing: 0.4px;
          margin-top: 42px;
          font: 16px/32px Poppins, sans-serif;
        }

        .div-16 {
          border-radius: 5px;
          border: 1px solid #585858;
          height: 43px;
        }

        .div-17 {
          letter-spacing: 0.4px;
          margin-top: 28px;
          font: 16px/32px Poppins, sans-serif;
        }

        .div-18 {
          border-radius: 5px;
          border: 1px solid #585858;
          height: 43px;
        }

        .div-19 {
          border-radius: 6px;
          border: 0.5px solid #000;
          background-color: #fff;
          margin-top: 54px;
          justify-content: space-between;
          gap: 20px;
          font-size: 16px;
          letter-spacing: 0.4px;
          line-height: 200%;
          padding: 13px 31px;
          display: flex;

        }

        .div-20 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        
        }

        .img-4 {
          aspect-ratio: 1.06;
          object-fit: auto;
          object-position: center;
          width: 16px;
          stroke-width: 1.5px;
          stroke: #585858;
          align-self: start;
        }

        .div-21 {
          align-items: center;
          border-radius: 13px;
          background-color: #111727;
          align-self: center;
          margin-top: 49px;
          width: 253px;
          max-width: 100%;
          justify-content: center;
          color: #fff;
          white-space: nowrap;
          letter-spacing: 0.4px;
          padding: 5px 60px;
          font: 16px/32px Poppins, sans-serif;
          margin-end: 40px;
        }
      `}</style>
    </>
  );
};

export default Signup2;
