import React from "react";
import Tour from "../Tours/Tour";
import Title from "../Title";
import { useStaticQuery, graphql } from "gatsby";
import styles from "../../css/items.module.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const fetchFeaturedTours = graphql`
  query {
    featuredTours: allContentfulTour(
      filter: { featured: { eq: true } }
      limit: 3
    ) {
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const response = useStaticQuery(fetchFeaturedTours);
  const tours = response.featuredTours.edges;
  console.log(tours.length);

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => (
          <Tour tour={node} key={node.contentful_id} />
        ))}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  );
};

export default FeaturedTours;
