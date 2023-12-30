import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

const MainCard = (props) => {
  const heartIcon = props.alreadyFavo ? (
    <FontAwesomeIcon icon={fasHeart} style={{ color: "#f39c12" }} />
  ) : (
    <FontAwesomeIcon icon={farHeart} style={{ color: "#f39c12" }} />
  );
  return (
    <div className="main-card">
      <span>
        <img src={props.img} alt="고양이" width="400" />
        <button onClick={props.onHeartClick}>{heartIcon}</button>
      </span>
    </div>
  );
};

export default MainCard;
