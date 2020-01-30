import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "../css/blog.module.css";
import BlogCard from "../components/Blog/BlogCard";
import Title from "../components/Title";

const BlogListTemplate = props => {
  const { data } = props;
  const { currentPage, numPages } = props.pageContext;
  const arr = Array.from({ length: numPages });
  console.log("arr", arr);
  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />;
          })}
        </div>
      </section>
      <section className={styles.links}>
        <AniLink fade to="/blogs" className={styles.link}>
          1
        </AniLink>
        {Array.from({ length: numPages }).forEach((_, i) => {
          return (
            <AniLink fade to="/blogs" className={styles.link}>
              1
            </AniLink>
          );
        })}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      totalCount
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default BlogListTemplate;
