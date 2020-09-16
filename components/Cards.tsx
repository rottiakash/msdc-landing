export interface CardsProps {
  visible: boolean;
}
import styles from "./Cards.module.css";

interface item {
  title: string;
  description: string;
}

const items: Array<item> = [
  {
    title: "Sanitization",
    description: "Mandatory Application of Sanitizer at Entry",
  },
  {
    title: "Fumigation",
    description: "The clinic is fumigated regularly",
  },
  {
    title: "PPE",
    description:
      "Personal Protection Equipment(PPE) is used aerosol procedures",
  },
  {
    title: "Temperature Checks",
    description:
      "Every patient's temeperature is measured using a contactless thermometer",
  },
  {
    title: "Blood Oxygen Saturation",
    description: "Every patient's SpO2 is measured using a Pulse Oximeter",
  },
  {
    title: "Sterilization",
    description:
      "All instruments used are Sterilized and stored in an UV Chamber",
  },
  {
    title: "High Vaccume",
    description: "High Vaccume Pump used to reduce aerosol emission",
  },
];

const Cards: React.FunctionComponent<CardsProps> = ({ visible }) => {
  console.log(visible);
  return (
    <section
      className={visible ? styles.cardList : styles.cardListHide}
      style={{ width: "100%" }}
    >
      {items.map((item) => (
        <Card title={item.title} description={item.description} />
      ))}
    </section>
  );
};

export default Cards;

export interface CardProps {
  title: string;
  description: string;
}

const Card: React.FunctionComponent<CardProps> = ({ title, description }) => {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <p>{title}</p>
        <h2 style={{ color: "white" }}>{description}</h2>
      </header>
    </article>
  );
};
