import HeaderPage from '../../Components/Header/Header'
import { Border, MainBody } from '../Main/Main-Styled'
import NendoStoreEx from '../../images/NendoStoreEx.png'
import persona2Ex from '../../images/persona2Ex.png'
import sociodem2 from '../../images/sociodem2.png'
import {
  ContainerDesc,
  ContainerStyled,
  ContainerStyledImgs,
  IframeStyled
} from './Projeto2-Styled'
import FooterPage from '../../Components/Footer/Footer'
import sociodeMobile2 from '../../images/sociodeMobile2.png'
function Projeto2() {
  return (
    <>
      <HeaderPage />

      <MainBody>
        <ContainerStyled>
          <div>
            <h1>NendoStore</h1>
            <h2>Resumo</h2>

            <p>
              O projeto desenvolvido para a pós-graduação em User Experience na
              Belas Artes.
            </p>
            <p>
              A prototipagem avançada de interface para um e-commerce de
              Nendoroids tem como objetivo desenvolver uma experiência de
              usuário intuitiva, atrativa e eficiente, focada no público
              colecionador e fã de cultura pop.
            </p>
            <div>
              <span>
                Papel: <p>UI Designer</p>
              </span>
            </div>
            <div className="mobileEx">
              <img src={NendoStoreEx} alt="" />
            </div>
          </div>

          <div className="desktopEx">
            <img src={NendoStoreEx} alt="" />
          </div>
        </ContainerStyled>
        <ContainerDesc>
          <h2>Persona</h2>
          <ContainerStyledImgs>
            <div>
              <img src={persona2Ex} alt="" />
            </div>

            <div>
              <img className="desktopSocio" src={sociodem2} alt="" />
              <img className="mobileSocio" src={sociodeMobile2} alt="" />
            </div>
          </ContainerStyledImgs>
        </ContainerDesc>
        <ContainerDesc>
          <h2>A proposta</h2>

          <p>
            Visando os princípios do modelo Fogg e modelo Hook, a proposta
            sugerida visaria uma jornada mais envolvente e personalizada para o
            público-alvo, que valoriza o investimento emocional do colecionador
            e o convida a voltar a plataforma. O protótipo também conta com
            carrinho funcional, filtragem por categorias e modos claro e escuro.
          </p>
          <IframeStyled>
            <iframe src="https://embed.figma.com/proto/CosW9Jor6TAo6wTja4sPeq/E-commerce?node-id=488-639&viewport=645%2C422%2C0.25&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=488%3A639&page-id=488%3A637&embed-host=share"></iframe>
          </IframeStyled>
        </ContainerDesc>

        <ContainerDesc>
          <h2>Conclusão</h2>

          <p>
            Com isso, o e-commerce deixaria de ser apenas um canal de venda e se
            torna um ambiente interativo, promovendo engajamento duradouro,
            satisfação e fidelização. Ao integrar elementos que estimulam o
            engajamento contínuo e reforçam o vínculo emocional com o
            colecionador, a plataforma contribui para a construção de relações
            mais duradouras. Além disso, a prototipagem avançada, ao simular
            funcionalidades reais, torna a experiência mais atrativa e imersiva
            para os usuários.
          </p>
        </ContainerDesc>
      </MainBody>
      <Border style={{ marginTop: '64px' }} />
      <FooterPage />
    </>
  )
}

export default Projeto2
