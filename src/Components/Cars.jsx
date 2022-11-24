import React from "react";
import "../App.css";

const Cars = (props) => {
  return (
    <>
      <div className="car">
        <div className="car-details">
          <div className="car-type">
            {props.type}
            <div className="car-type__details">
              <span className="car-type__details-main">{props.name}</span>
              <span className="car-type__details-sub">{props.modelType}</span>
            </div>
          </div>
          <img className="car-image" src={props.carImage} alt="Car Image" />
          <div className="car-btn__container">
            <button className="btn">
              <span>
                LEARN{" "}
                <img
                  className="btn-image"
                  src="../images/chevron-small.svg"
                  alt="Right arrow"
                />
              </span>
            </button>
            <button className="btn">
              <span>
                SHOP{" "}
                <img
                  className="btn-image"
                  src="../images/chevron-small.svg"
                  alt="Right arrow"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
