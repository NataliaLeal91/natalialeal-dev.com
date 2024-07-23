import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      {/* <header>
        <h2>Contacto</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:">EMAIL</a>
        </div>
        <div>
        <a href="tel:+"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+">TELÉFONO</a>
        </div>  
      </div> */}
    </Container>
  )
}