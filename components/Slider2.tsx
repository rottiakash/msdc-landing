export interface Slider2Props {}
import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import Cards from "./Cards";
import styles from "./Slider2.module.css";
const Slider2: React.FunctionComponent<Slider2Props> = () => {
  const [visible, set] = useState(false);
  const [done, setDone] = useState(false);
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <InView
          onChange={(inView, entry) => {
            if (!done) {
              set(inView);
              if (inView) setDone(true);
            }
          }}
          threshold={1}
        >
          <div className={visible ? styles.introtext : styles.hide}>
            Your Safety is our Priority
          </div>
        </InView>
        <Cards visible={visible} />
      </div>
    </div>
  );
};

export default Slider2;
