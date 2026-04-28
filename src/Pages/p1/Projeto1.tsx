import HeaderPage from '../../Components/Header/Header'
import { Border, MainBody } from '../Main/Main-Styled'
import boraJuntasEx from '../../images/boraJuntasEx.png'
import personaEx from '../../images/personaEx.png'
import sociodem from '../../images/sociodem.png'
import {
  ContainerDesc,
  ContainerStyled,
  ContainerStyledImgs,
  IframeStyled
} from './Projeto1-Styled'
import FooterPage from '../../Components/Footer/Footer'
import sociodeMobile from '../../images/sociodeMobile.png'
function Projeto1() {
  return (
    <>
      <HeaderPage />

      <MainBody>
        <ContainerStyled>
          <div>
            <h1>Bora Juntas</h1>
            <h2>Resumo</h2>

            <p>
              O projeto desenvolvido para conclusão do curso de pós-graduação em
              User Experience na Belas Artes.
            </p>
            <p>
              O objetivo do aplicativo destinado para mulheres é formar grupos
              de caminhadas para destinos em comum e fazer denúncias de
              incidentes, sendo exibidos como áreas sinalizadas no mapa.
            </p>
            <div>
              <span>
                Papel: <p>UX/UI Designer</p>
              </span>
            </div>
            <div className="mobileEx">
              <img src={boraJuntasEx} alt="" />
            </div>
          </div>

          <div className="desktopEx">
            <img src={boraJuntasEx} alt="" />
          </div>
        </ContainerStyled>
        <ContainerDesc>
          <h2>O problema</h2>

          <p>
            O deslocamento urbano é um dos contextos em que as mulheres mais
            vivenciam situações de violência, assédio e discriminação. Uma
            pesquisa de 2023 do Instituto Patrícia Galvão em parceria com a
            Uber, 74% das mulheres entrevistadas já passaram pessoalmente por
            situações de violência quando se movimentavam pela cidade, enquanto
            88% conhecem ao menos uma mulher que foi vítima de violência quando
            se deslocava.
          </p>
          <p>
            Andar a pé aparece como o meio mais associado a riscos em quase
            todas as situações, ônibus concentra principalmente os casos de
            assédio sexual e preconceito e carro aparece com maior peso em
            situações mais graves, como estupro e assalto.
          </p>
        </ContainerDesc>
        <ContainerDesc>
          <h2>Persona</h2>
          <ContainerStyledImgs>
            <div>
              <img src={personaEx} alt="" />
            </div>

            <div>
              <img className="desktopSocio" src={sociodem} alt="" />
              <img className="mobileSocio" src={sociodeMobile} alt="" />
            </div>
          </ContainerStyledImgs>
        </ContainerDesc>
        <ContainerDesc>
          <h2>A proposta</h2>

          <p>
            A funcionalidade principal é formar grupos de caminhadas para
            destinos em comum, sendo também possível compartilhar a localização
            para um contato específico e fazer denúncias de incidentes, esses
            registros são exibidos como áreas sinalizadas no mapa, indicando a
            possibilidade de ocorrência de certo evento.
          </p>
          <p>
            Você pode conferir o paper do projeto clicando{' '}
            <span>
              <a
                target="blank"
                href="https://docs.google.com/document/d/1zSWpz8lOFbWU61HSYIs2jL7X0jZ9n-a4/edit"
              >
                aqui
              </a>
            </span>
            .
          </p>

          <IframeStyled>
            <iframe src="https://embed.figma.com/proto/y1O7kzR05UrdhUsZNYeVrL/Projeto-PIC-P%C3%93S---Bora-Juntas?node-id=141-2352&viewport=764%2C45%2C0.13&scaling=scale-down&content-scaling=fixed&starting-point-node-id=141%3A2352&page-id=141%3A2188&embed-host=share"></iframe>
          </IframeStyled>
        </ContainerDesc>

        <ContainerDesc>
          <h2>Conclusão</h2>

          <p>
            Tendo em vista que ainda não é viável a implementação de um desenho
            urbano inclusivo, o protótipo do aplicativo “Bora Juntas”, aliado
            com princípios de design de experiência do usuário e a metodologia
            do duplo diamante, foi definido a partir de quais problemas
            enfrentados planejamos resolver e da ideação de alternativas. Após
            ser validado pelas usuárias como uma estratégia alternativa eficaz,
            de modo que auxilia às mulheres em seus deslocamentos dentro de
            grandes centros urbanos, visando promover um maior senso de
            segurança, comunidade e empoderamento entre as mulheres.
          </p>
        </ContainerDesc>
      </MainBody>
      <Border style={{ marginTop: '64px' }} />
      <FooterPage />
    </>
  )
}

export default Projeto1
