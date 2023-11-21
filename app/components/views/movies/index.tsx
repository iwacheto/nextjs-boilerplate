import React from "react";
import MovieItem from "../../ui-components/movie-item";

const Movies = ({ data }: any) => {
  console.log("movies", data);

  return (
    <div>
      Movies
      <div>
        {data.map((item: any, index: number) => {
          const movieItem = {
            title: item.title,
            slug: item.slug?.current,
            id: item._id,
          };
          return <MovieItem key={index} data={item} item={movieItem} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
