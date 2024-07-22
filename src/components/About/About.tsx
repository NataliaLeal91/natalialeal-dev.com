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
          <h2>Un poco de mi</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            En mis ultimos trabajos, me he especializado sobre todo en backend e infraestructura en la nube.
          </p>
          <br/>
          <p>
            Apegada a metodologías ágiles, buenas prácticas y con experiencia demostrada para entregar proyectos en tiempo y forma.
          </p>
          <br/>
          <p>
            Siempre en continuo aprendizaje, y recientemente tomando roles como líder de proyectos.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Algunas habilidades:</h3>
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
