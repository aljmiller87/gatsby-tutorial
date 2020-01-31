import React from "react";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";

const TRANSITION_LENGTH = 0.5;

const TransitionInner = ({ transitionStatus, path, text }) => {
  console.log("transitionStatus", transitionStatus);
  const exitTransition = {
    length: TRANSITION_LENGTH,
    trigger: () => {
      if (document) {
        document.body.style.opacity = "0";
      }
    },
  };

  const entryTransition = {
    delay: TRANSITION_LENGTH,
    trigger: () => {
      if (document && window) {
        window.scrollTo(0, 0);
        document.body.style.opacity = "1";
      }
    },
  };
  return (
    <TransitionLink
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      to={path}
      exit={exitTransition}
      entry={entryTransition}
    >
      {text}
    </TransitionLink>
  );
};

const TransitionWrapper = ({ path, text }) => {
  return (
    <TransitionState>
      {transition => {
        return (
          <TransitionInner
            transitionStatus={transition}
            path={path}
            text={text}
          />
        );
      }}
    </TransitionState>
  );
};

export default TransitionWrapper;
