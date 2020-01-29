import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour;
  console.log("description", description);
  const [mainImage, ...tourImages] = images;
  console.log(mainImage);
  console.log(tourImages);
  return (
    <Layout>
      <h1>{name}</h1>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default TourTemplate;
