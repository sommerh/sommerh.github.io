import React from 'react';

const Home = () => {
  return (
    <div id="/" className="segment font-link teal-bg">
      <div id="home-body">
        <div className="logo">
          <p className="hannah full-name white-txt">
            HA<span className="pink-txt">NN</span>AH
          </p>
          <p className="sommer full-name white-txt">
            SO<span className="pink-txt-lt">MM</span>ER
          </p>
          <p id="fse">full-stack engineer</p>
          <button>
            <a href="#about" className="font-link white-txt">
              Let's Hear More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
