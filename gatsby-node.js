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
  // amount of posts
  const posts = data.posts.edges;
  //posts per page
  const postsPerPage = 5;
  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/blogs" : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/BlogListTemplate.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
