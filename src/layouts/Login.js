import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import title from "../online-images/title.jpg";

function Login() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Redirect to the home page upon successful login
      navigate('/home');
    }
  }, [formErrors, isSubmit, navigate]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (!values.password.match(numbers)) {
      errors.password = "Password should contain numbers!";
    } else if (!values.password.match(lowerCase)) {
      errors.password = "Password should contain a lowercase letter!";
    } else if (!values.password.match(upperCase)) {
      errors.password = "Password should contain an uppercase letter!";
    }
    return errors;
  };

  return (
    <div className="home-container">
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui_message_success"> </div>
        ) : (
          <pre>{JSON.stringify()}</pre>
        )}

        <form onSubmit={handleSubmit}>
         
          <h1>Welcome Back</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <p>{formErrors.username}</p>
            <div className="field">
              <label>Email</label>
              <br />
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="input"
              />
            </div>
            <p>{formErrors.email}</p>
            <label>Password </label> <br />
            <div className="field">
              <input
                type={isShown ? "text" : "password"}
                className="input"
                name="password"
                onChange={handleChange}
                value={formValues.password}
              />

              <div className="checkbox-container">
                <label htmlFor="checkbox">Show password?</label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={isShown}
                  onChange={togglePassword}
                />
              </div>
            </div>
            <p>{formErrors.password}</p>
            <div className="button-container">
              <button className="secondary-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <style jsx>{`
        .home-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        .container {
          width: 400px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        img.oval-image {
          border-radius: 50%;
          margin-bottom: 30px;
          max-width: 20rem;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .ui.divider {
          margin: 20px 0;
        }

        .ui_message_success {
          background-color: #4caf50;
          color: #fff;
          padding: 10px;
          text-align: center;
          margin-bottom: 20px;
          border-radius: 5px;
        }

        .ui.form {
          max-width: 300px;
          margin: 0 auto;
        }

        .field {
          margin-bottom: 15px;
        }

        label {
          display: block;
          font-size: 16px;
          margin-bottom: 8px;
        }

        input.input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }

        #checkbox {
          margin-left: 5px;
        }

        p {
          color: #ff0000;
          font-size: 14px;
          margin: 5px 0;
        }

        .button-container {
          display: flex;
          justify-content: center;
        }

        .secondary-button {
          background-color:#111727;
          color: #fff;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}

export default Login;
