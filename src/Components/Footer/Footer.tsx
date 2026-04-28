import { Copyright, Footer } from './Footer-Styled'
import Logo from '../../images/logo.png'
import emailbutton from '../../images/emailbutton.png'
import linkedinbutton from '../../images/linkedinbutton.png'
import behancebutton from '../../images/behancebutton.png'

function FooterPage() {
  return (
    <>
      <Footer>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <ul>
            <li>
              <img src={emailbutton} alt="" />
            </li>
            <li>
              <a
                target="blank"
                href="https://www.linkedin.com/in/lygia-magalhaes/"
              >
                <img src={linkedinbutton} alt="" />
              </a>
            </li>
            <li>
              <a target="blank" href="https://www.behance.net/lygia-magalhaes">
                <img src={behancebutton} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </Footer>
      <Copyright>
        <p>Design por Lygia Magalhães • Desenvolvido por KromaStack Labs</p>
      </Copyright>
    </>
  )
}

export default FooterPage
