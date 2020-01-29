import React from "react";
import { StaticQuery, graphql } from "gatsby";
const getSiteDate = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteDate}
      render={data => {
        console.log("data", data);
        return <h1>{data.site.siteMetadata.title}</h1>;
      }}
    />
  );
};

export default RegularHeader;
