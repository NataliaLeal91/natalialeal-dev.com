import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <div>
      <Container className="footer">
        <div className="social-media">
          <a
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
      </Container>
    </div>
  )
}
