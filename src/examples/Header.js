import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getSiteDate = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const Header = () => {
  const {
    site: {
      siteMetadata: { title, author },
    },
  } = useStaticQuery(getSiteDate);
  console.log("data", title, author);
  return (
    <div>
      <h1>title: {title}</h1>
      <h1>author: {author}</h1>
    </div>
  );
};

export default Header;
