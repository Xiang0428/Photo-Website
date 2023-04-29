import React from "react";

const Picture = (props) => {
  const { data } = props;
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        Download Image:
        <a target="_blank" href={data.src.large}>
          Click here
        </a>
      </p>
    </div>
  );
};

export default Picture;
