import React from 'react'
import { Link } from 'react-router-dom'
import { MainBody, Projetos, Container, Border } from './Main-Styled'
import projetoBoraJuntas from '../../images/projeto-bora-juntas.png'
import projetoNendostore from '../../images/projeto-nendostore.png'
import projetoSerenity from '../../images/projeto-serenity.png'
import HeaderPage from '../../Components/Header/Header'
import FooterPage from '../../Components/Footer/Footer'
function Main() {
  return (
    <>
      <HeaderPage />

      <MainBody>
        <div id="sobre">
          <h2>UX/UI Designer</h2>
          <h1>Olá, sou Lygia Magalhães</h1>

          <p>
            Sou UX/UI Designer, graduada em Design e com pós-graduação em User
            Experience. Tenho habilidades em pesquisa de usuários, prototipagem
            e criação de interfaces responsivas.{' '}
          </p>
          <p>
            Acredito que o design deve colocar as pessoas no centro, criando
            soluções que atendam suas necessidades, problemas e desejos de forma
            empática e intuitiva.
          </p>
          <p>
            Meu propósito é proporcionar experiências acessíveis para clientes e
            usuários, visando englobar uma experiência completa além do digital.
            Se você busca uma profissional dedicada, criativa e com uma
            abordagem centrada no usuário, fico à disposição para conversar!
          </p>

          <p>Vamos nos conectar?</p>
        </div>

        <div className="LinksPrincipais">
          <ul>
            <li>
              <a
                className="corno"
                target="blank"
                href="https://www.linkedin.com/in/lygia-magalhaes/"
              >
                <span>
                  <div className="icone"></div>
                  <p>LinkedIn</p>
                </span>
              </a>
            </li>

            <li>
              <a target="blank" href="https://www.behance.net/lygia-magalhaes">
                <span>
                  <div className="icone2"></div>
                  <p>Behance</p>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </MainBody>

      <Projetos>
        <Container id="projetos">
          <h3 className="sectName">Projetos</h3>

          <ul className="cards">
            <li>
              <Link to="/bora-juntas">
                <img src={projetoBoraJuntas} alt="" />
                <h3 className="projName">Bora Juntas</h3>
                <h5>UX/UI Design</h5>
                <p>
                  Aplicativo de caminhada e rotas voltadas para segurança
                  feminina.
                </p>
              </Link>
            </li>

            <li>
              <Link to="/nendostore">
                <img src={projetoNendostore} alt="" />
                <h3 className="projName">NendoStore</h3>
                <h5>UX/UI Design</h5>
                <p>
                  Prototipagem avançada de interface para um e-commerce de
                  nendoroid.
                </p>
              </Link>
            </li>

            <li>
              <Link to="/serenity">
                <img src={projetoSerenity} alt="" />
                <h3 className="projName">Serenity</h3>
                <h5>UX Writing</h5>
                <p>
                  Criação de copy e aplicação do escopo em chatbot na plataforma
                  TakeBlip.
                </p>
              </Link>
            </li>
          </ul>
        </Container>
      </Projetos>

      <Border />
      <FooterPage />
    </>
  )
}

export default Main
