import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import commentCodeIcon from "../../assets/comment-code.png";
import  { useState, useEffect } from 'react';



interface TypewriterProps {
  text: string;   // Prop 'text' debe ser un string
  speed: number;  // Prop 'speed' debe ser un número
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed }) => {

  const displayText = useTypewriter(text, speed);

  return <h1>{displayText}</h1>;
};

const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

export function Hero() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hola <img src={Hello} alt="Hello" width="20px"/>, yo soy</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <Typewriter text="Natalia Leal" speed={180} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Desarrollo de Software</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p>Backend | Middleware | Web developer</p><br/>
          <p className="small-resume"><b>+10</b> años de experiencia</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
          <NavHashLink smooth  to="#about" className="button">
              <img  src={commentCodeIcon} alt="" />
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>




        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
        <div className="social-media"><a
          href="https://www.linkedin.com/in/natalia-leal-56415580/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/NataliaLeal91"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
        </ScrollAnimation>
      </div>
      {/* <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration}  />
        </ScrollAnimation>
      </div> */}
    </Container>
  )
}