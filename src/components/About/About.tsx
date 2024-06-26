import { Container } from "./styles";
import NataliaLeal from "../../assets/NataliaLeal.jpg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import awsIcon from "../../assets/aws.svg";
import laravelIcon from "../../assets/laravel.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          For many years, I worked as a full-stack developer, creating websites and systems for various companies, both as an employee and by my own.
          </p><br/>
          <p>
          Recently, I have become heavily involved in development on the Amazon Web Services platform for digital transformation to the cloud, focusing on backend tasks such as migrating and building APIs, analyzing requirements, estimating timelines, and troubleshooting.
          </p><br/>
          <p>
          I am highly dedicated to my continuous learning and always pay close attention to detail in every development task.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>My main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
        </div>
        <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
            <img src={laravelIcon} alt="Laravel" />
          </ScrollAnimation>
        </div>

        <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={awsIcon} alt="Aws" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>

        </div>
      </div>
      {/* <div className="about-image"> */}
        {/* <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}> */}
          {/* <img src={NataliaLeal} alt="Natalia Leal" /> */}
        {/* </ScrollAnimation> */}
      {/* </div> */}
    </Container>
  )
}
