import React from "react";
import Title from "../Title";
import styles from "../../css/about.module.css";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const fetchAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = props => {
  const { aboutImage } = useStaticQuery(fetchAboutImage);

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="text" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the fifference</h4>
          <p>
            Lorem ipsum dolor amet paleo beard taiyaki chia vaporware poke viral
            hella brunch disrupt four loko gentrify
          </p>
          <p>
            90's farm-to-table yr beard retro truffaut. XOXO single-origin
            coffee salvia, migas air plant pok pok synth disrupt coloring book
            hell of mixtape photo booth.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
