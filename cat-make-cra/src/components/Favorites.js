import React from "react";
import CatItem from "./CatItem";

export default function Favorites(props) {
  if (props.favo.length === 0) {
    return <div id="art">사진 위 하트를 눌러 사진을 저장해 보세요.</div>;
  }
  return (
    <ul className="favorites">
      {props.favo.map((cat, i) => (
        <CatItem img={cat} key={i} />
      ))}
    </ul>
  );
}
