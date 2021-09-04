import Section from "../Section/Section";

import classes from "./About.module.css";
import Image from "../../assets/images/me.jpg";

const About = () => {
  return (
    <Section header="About me" id="about">
      <div className={classes.About}>
        <img className={classes.Image} src={Image} alt="Me in Malaysia" />
        <p className={classes.Content}>
          I spent 5 years in Finland to study and work in software field. I had
          a chance to build my career path in web development. From very first
          days, I only worked with HTML, CSS, JavaScript and jQuery and tried to
          understand how the front end can transfer data back and forth to back
          end. Now I am focusing on web front end career path with ReactJs.
        </p>
      </div>
    </Section>
  );
};

export default About;
