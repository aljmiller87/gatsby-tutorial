import React, { useState } from "react";
import styles from "../../css/items.module.css";
import Tour from "./Tour";
import Title from "../Title";

const TourList = ({ tours }) => {
  const [allTours, setAllTours] = useState(tours.edges);
  const [sortedTours, setSortedTours] = useState(tours.edges);
  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map(({ node }) => {
          return <Tour tour={node} key={node.contentful_id} />;
        })}
      </div>
    </section>
  );
};

export default TourList;
