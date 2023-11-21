"use client";
import React, { FunctionComponent } from "react";
import Link from "next/link";
import { MovieItemInterface } from "@/interfaces/movies/movieItemInterface";

interface LayoutProps {
  data: any;
  item: MovieItemInterface;
}

const MovieItem: FunctionComponent<LayoutProps> = ({ data, item }) => {
  console.log("movie item", item);

  return (
    <div>
      <Link href={item.slug}> {item.title}</Link>
    </div>
  );
};

export default MovieItem;
