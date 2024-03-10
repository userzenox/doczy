import * as React from "react";
import { useNavigate } from "react-router-dom";

const Coaching = () => {
  const [coachingName, setCoachingName] = React.useState("");
  const [batch, setBatch] = React.useState("");
  const [rollNumber, setRollNumber] = React.useState("");
  const [section, setSection] = React.useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!coachingName || !batch || !rollNumber || !section) {
      alert("Please fill in all the fields.");
    } else {
      navigate("/Home");
     
    }
  };

  return (
    <>
      <div className="div">
        <div className="div-2 darker">DOCZY</div>
        <div className="div-3">Documentation made easy</div>
        <div className="div-4">Coaching Details</div>
        <div className="div-5">
          <div className="div-6">Coaching Name</div>
          <select
            value={coachingName}
            onChange={(e) => setCoachingName(e.target.value)}
            className="dropdown"
          >
            <option value="">Select Coaching Name</option>
            <option value="Coaching A">Coaching A</option>
            <option value="Coaching B">Coaching B</option>
            <option value="Coaching C">Coaching C</option>
            {/* Add more options if needed */}
          </select>
        </div>
        <div className="div-7">
          <div className="div-8">Batch</div>
          <select
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            className="dropdown"
          >
            <option value="">Select Batch</option>
            <option value="Batch 1">Batch 1</option>
            <option value="Batch 2">Batch 2</option>
            <option value="Batch 3">Batch 3</option>
            {/* Add more options if needed */}
          </select>
        </div>
        <div className="div-9">Roll Number</div>
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <div className="div-11">Section</div>
        <input
          type="text"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <div className="div-13" onClick={handleClick}>
          Create account
        </div>
      </div>
      <style jsx>{`
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
        }
        .div-2 {
          color: #000;
          letter-spacing: 3.36px;
          align-self: center;
          margin-top: 32px;
          font: 600 48px/67% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .darker {
          color: #222; /* Darker color for the heading */
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
          white-space: nowrap;
          font: 32px/100% Poppins, sans-serif;
        }
        .div-5,
        .div-7,
        .div-9,
        .div-11 {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
        }
        select,
        input {
          border: 1px solid #585858;
          border-radius: 5px;
          height: 43px;
          padding: 0 10px;
        }
        .div-5 select,
        .div-7 select {
          overflow-y: auto; /* Enable vertical scrolling */
          max-height: 150px; /* Set max height for the drop-down menu */
        }
        .div-13 {
          font-family: Poppins, sans-serif;
          align-items: center;
          border-radius: 13px;
          background-color: #111727;
          margin-top: 50px;
          justify-content: center;
          color: #fff;
          white-space: nowrap;
          line-height: 32px;
          padding: 5px 60px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Coaching;
