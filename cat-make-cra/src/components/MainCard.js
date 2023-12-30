import React from "react";

const MainCard = (props) => {
  const heartIcon = props.alreadyFavo ? "💖" : "🤍";
  return (
    <div className="main-card">
      <img src={props.img} alt="고양이" width="400" />
      <button onClick={props.onHeartClick}>{heartIcon}</button>
    </div>
  );
};

export default MainCard;
