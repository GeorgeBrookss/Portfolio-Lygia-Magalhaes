import { Header, MainContainer } from './Header-Styled'
import menuBurger from '../../images/menuBurger.png'
import { Link } from 'react-router-dom'

function HeaderPage() {
  return (
    <>
      <Header>
        <MainContainer>
          <Link to="/">
            <div className="logo"></div>
          </Link>

          <div>
            <div className="burger">
              <img src={menuBurger} alt="Menu" />
            </div>

            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
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
          </div>
        </MainContainer>
      </Header>
    </>
  )
}

export default HeaderPage
