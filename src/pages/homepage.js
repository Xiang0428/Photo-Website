import React, { useState, useEffect, useRef } from "react";
import Search from "../components/search";
import Pictures from "../components/pictures";
const Homepage = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const childRef = useRef(null);
  let getIntialData = (data) => {
    console.log(data);
    setData(data);
  };

  React.useEffect(() => {
    childRef.current.searchPhoto();
  }, []);

  const loadMoreData = () => {};

  return (
    <div>
      <Search getIntialData={getIntialData} ref={childRef} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Pictures key={d.id} data={d} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
