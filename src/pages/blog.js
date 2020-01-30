import React from "react";
import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import { graphql } from "gatsby";
import BlogList from "../components/Blog/BlogList";

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero
        home={false}
        img={data.blogBcg.childImageSharp.fluid}
      ></StyledHero>
      <BlogList />
    </Layout>
  );
};

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          src
        }
      }
    }
  }
`;
export default blog;
