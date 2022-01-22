import Section from "../Section/Section";
import {
  React,
  Nodejs,
  Database,
  Code,
  AWS,
  Shopify,
} from "../../components/Icons/Icons";
import classes from "./Skills.module.css";

const Skill = (props) => {
  return (
    <div className={classes.Skill}>
      <div className={classes.Icon}>{props.iconElement}</div>
      <div className={classes.Desciption}>{props.description}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <Section header="Skills" id="skills">
      <div className={classes.Skills}>
        <Skill
          iconElement={<React />}
          description={
            <>
              <b>ReactJs.</b> Competently using hooks, functional components.
            </>
          }
        />
        <Skill
          iconElement={<Nodejs />}
          description={
            <>
              <b>NodeJs.</b> Use Expressjs framework, write efficient
              asynchronous programming.
            </>
          }
        />
        <Skill
          iconElement={<Database />}
          description={
            <>
              <b>MongoDB</b> as No SQL database and previous experience with
              MS-SQL Database. Able to design schemas for best perfomence.
            </>
          }
        />
        <Skill
          iconElement={<Code />}
          description={
            <>
              Write React and Node with <b>TypeScript</b>.
            </>
          }
        />
        <Skill
          iconElement={<AWS />}
          description={
            <>
              Expreience with <b>AWS</b> such as EC2, S3, SES, Amplify, IoT, ...
            </>
          }
        />
        <Skill
          iconElement={<Shopify />}
          description={
            <>
              <b>Shopify.</b> Work with Liquid, api; experience designing
              landing page, building app, managing the store system
            </>
          }
        />
      </div>
    </Section>
  );
};

export default Skills;
