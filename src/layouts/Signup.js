import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Loader from "../components/Loader"; // Import your custom loader component

const Signup = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const mobileRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Simulate a delay or perform any initialization logic
    setTimeout(() => {
      setLoading(false); // Hide the loader after the delay
    }, 2000); // Adjust the delay time as needed
  }, []); // Run only once after the component mounts

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleKeyDown = (e, ref) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current.focus();
    }
  };

  const handleNextClick = () => {
    // Check if all input fields are filled
    if (
      name.trim() === "" ||
      mobileNumber.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      // If any field is empty, show an alert and return
      alert("Please fill in all fields");
      return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
      // If passwords do not match, show an alert and return
      alert("Passwords do not match");
      return;
    }

    // If all conditions are met, navigate to the next page
    setLoading(true); // Show loader when the button is clicked
    // Simulate a delay or perform an action before redirecting
    setTimeout(() => {
      // Redirect to the next page after the delay
      navigate("/signup2");
      setLoading(false); // Hide the loader
    }, 2000); // Adjust the delay time as needed
  };

  return (
    <div className="container">
      {loading ? (
        <Loader /> // Show loader if loading state is true
      ) : (
        <>
          <div className="div-2">DOCZY </div>
          <div className="div-3">Documentation made Ezy</div>
          <div className="div-4">SignUp</div>
          <div className="div">
            <div className="div-5">Name</div>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="div-6"
              onKeyDown={(e) => handleKeyDown(e, mobileRef)}
            />
            <div className="div-7">Mobile Number</div>
            <input
              type="text"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className="div-8"
              onKeyDown={(e) => handleKeyDown(e, passwordRef)}
              ref={mobileRef}
            />
            <div className="div-9">Password</div>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="div-10"
              onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
              ref={passwordRef}
            />
            <div className="div-11">Confirm Password</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="div-12"
            
              ref={confirmPasswordRef}
            />
            <div className="div-13">
              {/* Conditionally render loader or button */}
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div className="div-14">
                  <div className="div-15">
                    {/* Handle click event for the button */}
                    <button onClick={handleNextClick} style={{ color: 'white', backgroundColor: '#111727', border: 'none', cursor: 'pointer', padding: '10px 20px', borderRadius: '5px' }}> Next </button>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dec50ce002cc0c74e7c201405a3c4156673edad46d6322b38c98491cb7706ea3?"
                    className="img"
                  />
                </div>
              )}
            </div>
            <div className="div-16">Already have an account? <Link to="/Login"> Login </Link></div>
          </div>
        </>
      )}
      
      <style jsx>{`
        .container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 100vh;
            flex-direction: column;
          }
       
          .div {
            border-radius: 15px;
            background-color: #fff;
            max-width: 480px;
            width: 100%;
            font-size: 16px;
            color: #585858;
            font-weight: 500;
            letter-spacing: 0.4px;
            line-height: 200%;
            padding: 50px 38px 30px;
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
          padding: 50px 38px 30px;
        }
        .div-2 {
          color: #000;
          letter-spacing: 3.36px;
          align-self: center;
          margin-top: 12px;
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
          margin-top: 30px;
          font: 32px/100% Poppins, sans-serif;
        }
        .div-5 {
          font-family: Poppins, sans-serif;
          margin-top: 4px;
        }
        .div-6 {
          border-radius: 5px;
          border: 1px solid #585858;
          margin-top: 23px;
          height: 43px;
        }
        .div-7 {
          font-family: Poppins, sans-serif;
          margin-top: 30px;
        }
        .div-8 {
          border-radius: 5px;
          border: 1px solid #585858;
          margin-top: 23px;
          height: 43px;
        }
        .div-9 {
          font-family: Poppins, sans-serif;
          margin-top: 20px;
        }
        .div-10 {
          border-radius: 5px;
          border: 1px solid #585858;
          margin-top: 23px;
          height: 43px;
        }
        .div-11 {
          font-family: Poppins, sans-serif;
          margin-top: 20px;
        }
        .div-12 {
          border-radius: 5px;
          border: 1px solid #585858;
          margin-top: 23px;
          width: 313px;
          max-width: 100%;
          height: 43px;
        }
        .div-13 {
          align-items: center;
          border-radius: 13px;
          background-color: #111727;
          display: flex;
          margin-top: 31px;
          width: 100%;
          justify-content: center;
          color: #fff;
          white-space: nowrap;
          line-height: 32px;
          padding: 5px 60px;
        }
        .div-14 {
          display: flex;
          width: 63px;
          gap: 6px;
        }
        .div-15 {
            font-family: Poppins, sans-serif;
            flex-grow: 1;
            color: white !important; /* Set the color to white */
          }
        .img {
          aspect-ratio: 1.59;
          object-fit: auto;
          object-position: center;
          width: 100%;
          stroke-width: 1.5px;
          stroke: #fff;
          flex: 1;
          margin: auto 0;
        }
        .div-16 {
          color: #111727;
          font-family: Poppins, sans-serif;
          text-decoration-line: underline;
          align-self: center;
          margin-top: 67px;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}

export default Signup;
