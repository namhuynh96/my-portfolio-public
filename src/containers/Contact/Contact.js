import Section from "../Section/Section";
import { Github, LinkedIn } from "../../components/Icons/Icons";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <Section header="Contact" id="contact">
      <div className={classes.Contact}>
        <h2>Let's create next experience together!</h2>
        <a className={classes.Email} href="mailto:huynhchinam96@gmail.com">
          huynhchinam96@gmail.com
        </a>
        <div className={classes.SocialProfile}>
          <a
            className={classes.Link}
            href="https://github.com/namhuynh96"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            className={classes.Link}
            href="https://www.linkedin.com/in/nam-huynh-293193130/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
