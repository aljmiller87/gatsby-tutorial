import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";

export const getImage = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const StyledHero = ({ img, className, children, home }) => {
  const data = useStaticQuery(getImage);

  return (
    <BackgroundImage
      className={className}
      fluid={img || data.defaultBcg.childImageSharp.fluid}
      home={home}
    >
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledHero)`
  align-items: center;
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  opacity: 1 !important;
`;
