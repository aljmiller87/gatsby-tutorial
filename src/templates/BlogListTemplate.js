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
  const pages = Array.from({ length: numPages });
  const nextPage = currentPage + 1;
  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />;
          })}
        </div>
        <div className={styles.links}>
          {currentPage > 1 && (
            <AniLink fade to="/blogs" className={styles.link}>
              prev
            </AniLink>
          )}
          {pages.map((_, i) => {
            return (
              <AniLink
                fade
                to={`/blogs/${i === 0 ? "" : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            );
          })}
          {nextPage <= numPages && (
            <AniLink fade to={`/blogs/${nextPage}`} className={styles.link}>
              next
            </AniLink>
          )}
        </div>
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
