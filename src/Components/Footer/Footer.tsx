import { Copyright, Footer } from './Footer-Styled'
import Logo from '../../images/logo.svg'
import emailbutton from '../../images/emailbutton.svg'
import linkedinbutton from '../../images/linkedinbutton.svg'
import behancebutton from '../../images/behancebutton.svg'

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
              <a href="mailto:lygia.magalhaes@outlook.com">
                <img src={emailbutton} alt="" />
              </a>
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
