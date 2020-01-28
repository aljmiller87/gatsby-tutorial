import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Layout from "../components/Layout";
const blog = props => {
  return (
    <Layout>
      Welcome to the blog page!!!
      <Link to="/">Back home</Link>
    </Layout>
  );
};

blog.propTypes = {};

export default blog;
