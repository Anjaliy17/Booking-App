import React from "react";
import "./searchitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SearchItem = (props) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels/:id");
  };
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{props.Motel}</h1>
        <span className="siDistance">1km from center</span>
        <span className="siSubtitle">
          Comfortable Room with Air conditioning & Wifi
        </span>
        <span className="siFeatures">
          Entire room • 1 bathroom • 21m² 1 full bed • balcony
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>
            Excellent <br /> <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStarHalfStroke} />
          </span>
          <button>4.5</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹1100</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleSearch}>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
