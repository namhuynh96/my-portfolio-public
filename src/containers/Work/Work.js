import Section from "../Section/Section";
import Button from "../../components/Button/Button";
import IntershipCert from "../../assets/files/Internship_Certificate_Nam_Huynh.pdf";

import classes from "./Work.module.css";

const Work = () => {
  return (
    <Section header="Work" id="work">
      <div className={classes.Timeline}>
        <div className={[classes.ContentContainer, classes.Left].join(" ")}>
          <div className={classes.Content}>
            <h2>App For haravan.com (based in Vietnam, similar to Shopify)</h2>
            <h4>Sept 2020 - Jan 2021</h4>
            <ul>
              <li>
                Build a photo review app so that customer can post review with
                photo on an online store
              </li>
              <li>
                Apply Haravan APIs, webhooks. Create email campaigns with AWS
                SES. Save images and static files on AWS S3.
              </li>
              <li>
                <a
                  className={classes.Link}
                  href="https://apps.haravan.com/products/anhnoi-photo-review-danh-gia-bang-hinh-anh"
                  target="_blank"
                  rel="noreferrer"
                >
                  App on Haravan store in Vietnamese
                </a>
              </li>
              <li>
                Website in Vietnamese:{" "}
                <a
                  className={classes.Link}
                  href="https://anhnoi.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://anhnoi.com
                </a>
              </li>
            </ul>
            <a
              href="https://anhnoi-dev-shop.myharavan.com/products/ao-thun-anime#anhnoiReviews"
              target="_blank"
              rel="noreferrer"
            >
              <Button>App Demo</Button>
            </a>
          </div>
        </div>
        <div className={[classes.ContentContainer, classes.Right].join(" ")}>
          <div className={classes.Content}>
            <h2>University Project (Simple authorized IoT)</h2>
            <h4>Sep 2019 - March 2020</h4>
            <ul>
              <li>Build a real time web app with my stack</li>
              <li>
                Apply IoT from AWS IoT (MQTT protocol), server run on AWS EC2
                (Linux)
              </li>
              <li>Google Authentication by AWS Amplify</li>
              <li>
                Purpose: login by Google Account and control devices on the web
                with acceptance from admin
              </li>
            </ul>
          </div>
        </div>
        <div className={[classes.ContentContainer, classes.Left].join(" ")}>
          <div className={classes.Content}>
            <h2>Software Engineer Trainee</h2>
            <h4>InSolution Oy Tampere | Jan 2019 - Aug 2019</h4>
            <ul>
              <li>
                Learn and use .NET MVC to continue developing a project based on the
                company code base
              </li>
              <li>Create new features on front-end (HTML, CSS, JS, jQuery)</li>
              <li>Build APIs</li>
            </ul>
            <a href={IntershipCert} target="_blank" rel="noreferrer">
              <Button>Recommendation Letter</Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;
