import React from "react";
import ToursList from "./TourList";
import { useStaticQuery, graphql } from "gatsby";

const fetchTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          country
          days
          slug
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const Tours = () => {
  const { tours } = useStaticQuery(fetchTours);
  return (
    <div>
      <ToursList tours={tours} />
    </div>
  );
};

export default Tours;
