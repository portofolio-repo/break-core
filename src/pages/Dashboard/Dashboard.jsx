import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="test">
      <div className="container">
        <h1 className="title">BREAKORE</h1>
        <div className="view-project">
          <span className="arrow">
            <svg
              width="24"
              height="106"
              viewBox="0 0 24 106"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9393 105.061C11.5251 105.646 12.4749 105.646 13.0607 105.061L22.6066 95.5147C23.1924 94.9289 23.1924 93.9792 22.6066 93.3934C22.0208 92.8076 21.0711 92.8076 20.4853 93.3934L12 101.879L3.51471 93.3934C2.92893 92.8076 1.97918 92.8076 1.39339 93.3934C0.807608 93.9792 0.807608 94.9289 1.39339 95.5147L10.9393 105.061ZM10.5 -6.55671e-08L10.5 104L13.5 104L13.5 6.55671e-08L10.5 -6.55671e-08Z"
                fill="white"
              />
            </svg>
          </span>
          {/* btn */}
          <div className="btn-view">
            <Link to="./project">VIEW PROJECT</Link>
          </div>
          {/* btn */}
        </div>
      </div>
    </div>
  );
};
