import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import Banner from "../components/Banner";
import About from "../components/Home/About";
import Services from "../components/Home/Services";

const index = props => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor amet tumblr tousled prism neutra typewriter, paleo wolf post-ironic"
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
);

index.propTypes = {};

export default index;
