import Section from "../Section/Section";
import Button from "../../components/Button/Button";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <Section>
      <div className={classes.Home}>
        <h2>Hi, I am Nam 👋</h2>
        <h1 className={classes.Title}>A full stack developer.</h1>
        <h1>Love the entrepreneur spirit.</h1>
        <h1>And create amazing things on the Internet.</h1>
        <a href="#contact">
          <Button>Connect with me</Button>
        </a>
      </div>
    </Section>
  );
};

export default Home;
