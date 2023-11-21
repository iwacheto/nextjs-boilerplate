import React from "react";
import { client } from "../../utils/client/sanity";
// import Movies from "../components/views/movies";

const About = async () => {
  // const data = await getData();

  return (
    <section>
      About
      {/* <Movies data={data} /> */}
    </section>
  );
};

export default About;

async function getData() {
  const response = await client.fetch(`*[_type == 'movie']`);

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  return response;
}
