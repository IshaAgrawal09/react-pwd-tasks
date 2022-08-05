import React from "react";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="signup">
      <div>
        <input type="text" id="inputs" placeholder="Username" />
      </div>
      <div>
        <input type="password" id="inputs" placeholder="Password" />
      </div>
      <button>Sign In</button>
      <div>
        <Link to="/" id="member">
          New User?
        </Link>
      </div>
    </div>
  );
};

export default Signin;
