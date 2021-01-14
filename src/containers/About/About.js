import Section from "../Section/Section";

import classes from "./About.module.css";
import Image from "../../assets/images/me.jpg";

const About = () => {
  return (
    <Section header="About me" id="about">
      <div className={classes.About}>
        <img className={classes.Image} src={Image} alt="Me in Malaysia" />
        <p className={classes.Content}>
          I love to work with Nodejs and React. I use my stack with Typescript.
          For the database, I mainly work with MongoDb but I have also worked
          with SQL Database (MS-SQL) before. As a full stack, I am able to work
          efficiently in both front and back end position.
        </p>
      </div>
    </Section>
  );
};

export default About;
