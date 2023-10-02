
import Title from "../components/Title";
import Howdowork from "../components/howdowork";
import Partners from "./Partners";
import About from "./about";

function Homepage() {
  return (
    <>
     <Title
                mainText="Who we are"
                subText="projectx"
                subText2="Connecting people for you"
            />
      <Howdowork></Howdowork>
      <About></About>
      <Partners></Partners>
    </>
  );
}

export default Homepage;
