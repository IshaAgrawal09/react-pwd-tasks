import React from "react";
import "./Task2.css";
const Task2 = () => {
  return (
    <div className="task2">
      <div className="header">
        {/* NAVBAR  */}
        <div className="nav">
          <div className="logo">
            <img src="Ternio_logo.png" alt="" />
          </div>
          <div className="nav-item">
            <div>Home & Works</div>
            <div>Road Map</div>
            <div>About</div>
            <div>Contact</div>
            <div>Advertising</div>
            <div>
              <button>Dashboard_Login</button>
            </div>
          </div>
        </div>
        {/* FOCUS HEADING  */}
        <div className="focus-head">
          <div className="focus-content">
            <p>THE FUTURE IS NOW</p>
            <h1>The World's</h1>
            <h1>Fastest BLockchain</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>Receive Email Updates</button>
          </div>
          {/* BACK IMAGE  */}
          <div className="focus-image">
            <img id="backImage" src="task2Background.png" alt="" />
          </div>
        </div>
      </div>
      {/* SECTION 1 */}
      <div className="section">
        {/* SECTION HEADER  */}
        <div className="section-header">
          <div className="first">
            <img src="darkblueTernioLogo.webp" alt="" />
            <p>One Block at a Time</p>
          </div>
          <div className="second">
            <h1>One BLockchain to Meet All Needs</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        {/* sECTION CARD  */}
        <div className="card">
          <div className="single-card">
            <img src="card1.png" alt=""/>
            <h3>100% Decentralized</h3>
            <p>The purpose of this website is solely to display information regarding the products and services available on the Crypto.com App. </p>
          </div>
          <div className="single-card">
            <img src="card2.png" alt=""/>
            <h3>100% On-Chain</h3>
            <p>The purpose of this website is solely to display information regarding the products and services available on the Crypto.com App. </p>
          </div>
          <div className="single-card">
            <img src="card3.png" alt=""/>
            <h3>100% Verified</h3>
            <p>The purpose of this website is solely to display information regarding the products and services available on the Crypto.com App. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task2;
