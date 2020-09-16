import { Typography } from "antd";
import styles from "./Slider1.module.css";
const { Title } = Typography;
export interface Slider1Props {}

const Slider1: React.FunctionComponent<Slider1Props> = () => {
  return (
    <div className={styles.background}>
      <div style={{ height: "100%", width: "100%" }}>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            height: "100%",
            width: "100%",
          }}
        ></div>
        <div
          style={{
            zIndex: 2,
            color: "#3bf2bf",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <div className={styles.title}>MSDC</div>
          <div className={styles.subtitle}>M S Dental Clinic</div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
