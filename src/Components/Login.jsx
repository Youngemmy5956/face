import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 



export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [loading, setLoading] = useState(false);
  
    const navigate = useNavigate();
  
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      // setLoading(true);
  
      const data = {
        email: email,
        password: password,
      };
  
  
      try {
        await axios.post("http://localhost:5000/api/auth/login", data)
        .then((res) => {
          console.log(res.data.token);
          localStorage.setItem("token", JSON.stringify(res.data.token));
  
  
          navigate("/");
          // setLoading(false);
          alert("Login successful")
        })
      } catch(err) {
        console.log(err);
        // setLoading(false);
      }
      
    };

  // const navigate = useNavigate();
  return (
    <div>
      {/* <p>This is the homepage</p>
           <p>Click on this to enter Create page</p>
           <a href="/create">Create</a> */}

      <div class="fos">
        <div>
          <h1>FACEBOOK</h1>
          <h3>Connect with friends and the world around you on FACEBOOK</h3>
        </div>

        <div class="des">
          <form action="" onSubmit={onSubmit}>
            <input
              type="text"
              id="emt"
              placeholder="Email or Phone Number"
              onChange={onChangeEmail}
            />{" "}
            <br />
            <input
              type="text"
              id="emt"
              placeholder="Password"
              onChange={onChangePassword}
            />{" "}
            <br />
            <button id="lo">Log in</button> <br />
            <button id="fo">Forgot account?</button> <br />
            <button id="cnat">Create New Account</button>
            {/* onClick={() => navigate('/create')} */}
            {/* onClick={() => navigate('/')} */}
          </form>
        </div>
      </div>

      {/* <form class="row g-3">
  <div class="col-md-2">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
 
    <button onClick={() => navigate('/create')} class="btn btn-primary" type="submit">Submit form</button>

    
  </div>
</form> */}
    </div>
  );
}
