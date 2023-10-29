import React from "react";
import { client } from "../../utils/client/sanity";
import Movies from "../components/views/movies";

const About = async () => {
  const data = await getData();

  return (
    <section>
      About
      <Movies data={data} />
    </section>
  );
};

export default About;

// export async function getServerSideProps() {
//   const movies = await client.fetch(`*[_type == 'movie']`);

//   return {
//     props: {
//       movies,
//     },
//   };
// }

async function getData() {
  const response = await client.fetch(`*[_type == 'movie']`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!response) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response;
}
