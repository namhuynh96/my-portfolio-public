import Section from "../Section/Section";
import {
  React,
  Nodejs,
  Database,
  Code,
  AWS,
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
          description="ReactJs. Competently using hooks, functional components."
        />
        <Skill
          iconElement={<Nodejs />}
          description="Use Expressjs framework, write efficient asynchronous programming."
        />
        <Skill
          iconElement={<Database />}
          description="MongoDB as No SQL database and previous experience with MS-SQL Database. Able to design schemas for best perfomence."
        />
        <Skill
          iconElement={<Code />}
          description="Write React and Node with TypeScript."
        />
        <Skill
          iconElement={<AWS />}
          description="Expreience with AWS such as EC2, S3, SES, Amplify, IoT, ..."
        />
      </div>
    </Section>
  );
};

export default Skills;
