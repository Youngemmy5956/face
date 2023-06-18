import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

// import { useState } from "react";

export default function Ckeck() {
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios
        .post("http://localhost:5000/api/auth/register", input)
        .then((res) => {
          console.log(res.data);
          navigate("/login");
          setLoading(false);
          alert("Sign up successful");
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <div class="fos">
        {/* <div >
    
                <h1>FACEBOOK</h1>
                  <h3>Connect with friends and the world around you on FACEBOOK</h3>
                </div> */}

        <div>
          <h1>FACEBOOK</h1>
          <h3>Connect with friends and the world around you on FACEBOOK</h3>
        </div>

        <hr />

        <div class="des">
          <h1>Sign Up</h1>
          <p>It's quick and easy</p>

          <hr />
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="firstName"
              onChange={onChangeHandler}
              placeholder="First Name"
            />{" "}
            <input
              type="text"
              id="lastName"
              onChange={onChangeHandler}
              placeholder="Last Name"
            />{" "}
            <br />
            <input
              type="email"
              id="email"
              onChange={onChangeHandler}
              value={input.email}
              placeholder="Email or Mobile number"
            />{" "}
            <br />
            <input
              type="text"
              id="password"
              onChange={onChangeHandler}
              value={input.password}
              placeholder="New Password"
            />{" "}
            <br />
            <div class="wes">
              <p>Date of birth?</p>
              <select name="" id="res1">
                <option value="">1</option>
                <option value="">2</option>
                <option value="" selected>
                  3
                </option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>

              <select name="" id="res2">
                <option value="">Jan</option>
                <option value="">Feb</option>
                <option value="" selected>
                  Mar
                </option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">jun</option>
                <option value="">July</option>
                <option value="">Aug</option>
                <option value="">Sept</option>
                <option value="">Oct</option>
              </select>

              <select name="" id="res3">
                <option value="">2021</option>
                <option value="">2022</option>
                <option value="" selected>
                  2023
                </option>
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
                <option value="">2027</option>
                <option value="">2028</option>
                <option value="">2029</option>
                <option value="">2030</option>
              </select>
            </div>
            <br />
            {/* <p>Gender</p>  <br /> */}
            <div class="west">
              <div id="nm">
                Female <input type="radio" name="Female" id="nm" />
              </div>

              <div id="nm">
                Male <input type="radio" name="Female" id="nm" />
              </div>

              <div id="nm">
                Custom <input type="radio" name="Female" id="nm" />
              </div>
            </div>
            <br />
            <p>
              People who use our service may have uploaded your contact <br />{" "}
              information to Facebook. Learn more.
            </p>
            <p>
              By clicking Sign Up, you agree to our Terms, Privacy Policy and{" "}
              <br /> Cookies Policy. You may receive SMS notifications from us
              and <br /> can opt out at any time
            </p>
            {/* <button id='lo'>Log in</button> <br />
                     <button id='fo'>Forgot account?</button> <br /> */}
            <button id="cnas">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
