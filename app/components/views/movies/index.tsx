import React from "react";

const Movies = ({ data }: any) => {
  console.log("movies", data);
  // console.log("movies", data);

  return (
    <div>
      Movies
      <div>
        {data.map((item: any, index: number) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
