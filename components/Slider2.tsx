export interface Slider2Props {}
import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import styles from "./Slider2.module.css";
const Slider2: React.FunctionComponent<Slider2Props> = () => {
  const [visible, set] = useState(false);
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
        <InView onChange={(inView, entry) => set(inView)} threshold={1}>
          <div className={visible ? styles.introtext : styles.hide}>
            Your Safety is Important to us
          </div>
        </InView>
      </div>
    </div>
  );
};

export default Slider2;
