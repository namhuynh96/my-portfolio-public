import Section from "../Section/Section";
import Button from "../../components/Button/Button";
// import IntershipCert from "../../assets/files/Internship_Certificate_Nam_Huynh.pdf";

import classes from "./Work.module.css";

const Work = () => {
  return (
    <Section header="Work" id="work">
      <div className={classes.Timeline}>
        <div className={[classes.ContentContainer, classes.Left].join(" ")}>
          <div className={classes.Content}>
            <h2>
              App For Haravan app store (based in Vietnam, similar to Shopify)
            </h2>
            <h4>May 2020 - Dec 2020</h4>
            <ul>
              <li>
                Build a photo review app so that customer can post review with
                photo on an online shop
              </li>
              <li>Use React, ExpressJs, MongoDb and Typescript</li>
              <li>
                Apply Haravan APIs, webhooks. Create email campaigns with AWS
                SES. Save images and static files on AWS S3. Server runs on EC2
                (Linux)
              </li>
              <li>
                Process and minify the size of the images to maximize data
                storage and transfer performence
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
              <Button>App for demo shop in Vietnamese</Button>
            </a>
          </div>
        </div>
        <div className={[classes.ContentContainer, classes.Right].join(" ")}>
          <div className={classes.Content}>
            <h2>University Project (IoT web app)</h2>
            <h4>Sep 2019 - April 2020</h4>
            <ul>
              <li>
                Build an IoT web app for my university with React, ExpressJs,
                MongoDb, all written in Typescript
              </li>
              <li>
                Apply IoT from AWS IOT (MQTT protocol), server run on AWS EC2
                (Linux)
              </li>
              <li>Use Raspberry Pi to connect devices with AWS IoT</li>
              <li>
                Main purpose: able to control connected devices on the web and
                analyze users, devices data.
              </li>
            </ul>
            <a
              href="https://hamkiot.nam-huynh.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Project demo</Button>
            </a>
          </div>
        </div>
        <div className={[classes.ContentContainer, classes.Left].join(" ")}>
          <div className={classes.Content}>
            <h2>Full stack developer</h2>
            <h4>InSolution (Tampere, Finland) | Jan 2018 - Aug 2019</h4>
            <ul>
              <li>Maintain and develop the web app with .NET MVC</li>
              <li>Build RESTful APIs and work with MSSQL</li>
              <li>
                Build new features and functionalities as need of the customers
              </li>
              <li>
                Create real-time data transfer from local server to PLC (by HTTP
                and timer)
              </li>
              <li>
                Understand the fundametals of software and protocols (TCP/IP,
                HTTP, ...)
              </li>
            </ul>
            {/* <a href={IntershipCert} target="_blank" rel="noreferrer">
              <Button>Recommendation Letter</Button>
            </a> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;
