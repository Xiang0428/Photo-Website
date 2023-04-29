import React, { forwardRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = forwardRef((props, ref) => {
  const [input, setInput] = useState("");
  const intialURL = `https://api.pexels.com/v1/curated?per_page=15&page=1`;
  const photoAPIKEY =
    "wgvSSxNXZMMIiL7pa6iVPTWOCoqYNpEeui7eOhBge3TLnTcraJqzsoj1";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  const searchPhoto = async (url = intialURL) => {
    //fetch API data

    const DataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: photoAPIKEY,
      },
    });

    let ParseData = await DataFetch.json();

    //傳回父組件getIntialData function
    props.getIntialData(ParseData.photos);
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  React.useImperativeHandle(ref, () => ({
    searchPhoto,
  }));

  return (
    <div className="search">
      <input type="text" onChange={inputHandler} />
      <button
        onClick={() => {
          searchPhoto(searchURL);
        }}
      >
        <BiSearchAlt />
      </button>
    </div>
  );
});

export default Search;
