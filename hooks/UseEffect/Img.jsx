import React, { useEffect } from "react";

function Img() {
  useEffect(() => {
    console.log("img component mounted");

    return () => {
      console.log("Component has Unmounted");
    };
  }, []);

  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt=""
      />
    </div>
  );
}

export default Img;
