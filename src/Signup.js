import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div>
        <input type="text" id="inputs" placeholder="Username" />
      </div>
      <div>
        <input type="text" id="inputs" placeholder="Full name" />
      </div>
      <div>
        <input type="email" id="inputs" placeholder="Email" />
      </div>
      <div>
        <input type="password" id="inputs" placeholder="Password" />
      </div>
      <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1">
          Agree with <a href="/">Terms & Conditions</a>
        </label>
      </div>
      <button>Sign up</button>
      <div>
        <Link to="/signin" id="member">I'm already a member</Link>
      </div>
    </div>
  );
};

export default Signup;
