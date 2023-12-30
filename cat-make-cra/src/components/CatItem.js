import React from "react";

export default function CatItem(props) {
  return (
    <li>
      <img src={props.img} style={{ width: "250px" }} alt="cat" />
    </li>
  );
}
