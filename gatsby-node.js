const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.tours.edges.forEach(({ node }) => {
    const slug = node.slug;
    createPage({
      path: `/tours/${slug}`,
      component: path.resolve("./src/templates/TourTemplate.js"),
      context: { slug: slug },
    });
  });
  data.posts.edges.forEach(({ node }) => {
    const slug = node.slug;
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve("./src/templates/BlogTemplate.js"),
      context: { slug: slug },
    });
  });
};
