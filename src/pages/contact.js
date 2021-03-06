import React from "react";
import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import Contact from "../components/Contact/Contact";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact Page" />
      <StyledHero
        home={false}
        img={data.contactBcg.childImageSharp.fluid}
      ></StyledHero>
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default contact;
