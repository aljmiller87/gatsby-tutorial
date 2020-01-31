import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/Layout";
import styles from "../css/single-blog.module.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BlogCard from "../components/Blog/BlogCard";
import blogCardStyles from "../css/blog-card.module.css";
import SEO from "../components/SEO";

const BlogTemplate = ({ data }) => {
  console.log("data", data);
  const {
    title,
    published,
    text: { json },
  } = data.post;

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log("where is my image", node);
        if (!node.data.target.fields) {
          return <h3>where is my image</h3>;
        }
        return (
          <div className="rich">
            <h3>this is an image</h3>
            <img
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt=""
            />
          </div>
        );
      },
      "embedded-entry-block": node => {
        console.log("embedded-entry-block", node.data.target.fields);
        const { slug, title, image, published } = node.data.target.fields;
        return (
          <div>
            <h1>this is other post</h1>
            <article className={blogCardStyles.blog}>
              <div className={blogCardStyles.imgContainer}>
                <img
                  src={image["en-US"].fields.file["en-US"].url}
                  className={blogCardStyles.img}
                  alt="single post"
                  style={{ maxWidth: "100%" }}
                />
                <AniLink
                  fade
                  className={blogCardStyles.link}
                  to={`/blog/${slug["en-US"]}`}
                >
                  read more
                </AniLink>
                <h6 className={blogCardStyles.date}>{published["en-US"]}</h6>
              </div>
              <div className={blogCardStyles.footer}>
                <h4>{title["en-US"]}</h4>
              </div>
            </article>
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMM do, YYYY")
      text {
        json
      }
    }
  }
`;

export default BlogTemplate;
