import Section from "../Section/Section";

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Section>
      <div className={classes.NavBar}>
        <div className={classes.Portfolio}>Nam's Portfolio</div>
        <div>
          <a className={classes.Nav} href="#about">
            About
          </a>
          <a className={classes.Nav} href="#skills">
            Skills
          </a>
          <a className={classes.Nav} href="#work">
            Work
          </a>
          <a className={classes.Nav} href="#education">
            Education
          </a>
          <a className={classes.Nav} href="#contact">
            Contact
          </a>
        </div>
      </div>
    </Section>
  );
};

export default NavBar;
