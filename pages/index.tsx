import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";

export interface IndexProps {}

const Index: React.FunctionComponent<IndexProps> = () => {
  return (
    <>
      <Slider1 />
      <Slider2 />
    </>
  );
};

export default Index;
