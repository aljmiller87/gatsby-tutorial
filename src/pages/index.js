import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import StyledHero from "../components/StyledHero";
import FeaturedTours from "../components/Home/FeaturedTours";
import { graphql } from "gatsby";

export default ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <StyledHero home={true} img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor amet tumblr tousled prism neutra typewriter, paleo wolf post-ironic"
        >
          <AniLink fade to="/tours" className="btn-white">
            explore tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
