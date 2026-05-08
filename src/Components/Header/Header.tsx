import { Header, MainContainer } from './Header-Styled'
import menuBurger from '../../images/menuBurger.svg'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'

function HeaderPage() {
  const [menuAberto, setMenuAberto] = useState(false)

  const toggleMenu = () => {
    setMenuAberto(!menuAberto)
  }

  return (
    <>
      <Header>
        <MainContainer $menuAberto={menuAberto}>
          <Link to="/">
            <div className="logo"></div>
          </Link>

          <div className="burger" onClick={toggleMenu}>
            <img src={menuBurger} alt="Menu" />
          </div>

          <ul>
            <li>
              <HashLink smooth to="/#sobre">
                Sobre
              </HashLink>
            </li>
            <li>
              <HashLink to="/#projetos">Projetos</HashLink>
            </li>
            <li>
              <a
                target="blank"
                href="https://docs.google.com/document/d/1fy2FzY5yAhi-pUiv0Sbv_t6T0Lacnh9sJWqKhoYEI9k/edit?tab=t.0"
                className="botaoCV"
              >
                Ver CV
              </a>
            </li>
          </ul>
        </MainContainer>
      </Header>
    </>
  )
}

export default HeaderPage
