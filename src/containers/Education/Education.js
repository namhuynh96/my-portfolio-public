import Section from "../Section/Section";

import classes from "./Education.module.css";

const Education = () => {
  return (
    <Section header="Education" id="education">
      <div className={classes.Education}>
        <div className={classes.EducationEach}>
          <h3>Hamk University of Applied Sciences</h3>
          {/* <p className={classes.Time}>2016 - 2020</p> */}
          <p>Bachelor in Automation Engineering</p>
        </div>
        <div className={classes.EducationEach}>
          <h3>Udemy Self-taught</h3>
          <p>ReactJs and NodeJs</p>
        </div>
      </div>
    </Section>
  );
};

export default Education;
