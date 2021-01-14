import classes from "./Section.module.css";

const Section = (props) => {
  return (
    <div className={classes.Section} id={props.id}>
      {props.header && (
        <div className={classes.Header}>
          <h1>{props.header}</h1>
        </div>
      )}
      {props.children}
    </div>
  );
};

export default Section;
