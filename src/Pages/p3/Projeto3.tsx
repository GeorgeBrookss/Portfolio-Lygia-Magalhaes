import HeaderPage from '../../Components/Header/Header'
import { Border, MainBody } from '../Main/Main-Styled'
import SerenityEx from '../../images/SerenityEx.png'
import persona3Ex from '../../images/persona3Ex.png'
import SerenityPersona from '../../images/SerenityPersona.png'
import sociodem3 from '../../images/sociodem3.png'
import userflowChatbot from '../../images/userflowChatbot.png'
import {
  ContainerDesc,
  ContainerStyled,
  ContainerStyledImgs,
  IframeStyled
} from './Projeto3-Styled'
import FooterPage from '../../Components/Footer/Footer'
import sociodeMobile3 from '../../images/sociodeMobile3.png'
function Projeto3() {
  return (
    <>
      <HeaderPage />

      <MainBody>
        <ContainerStyled>
          <div>
            <h1>Serenity</h1>
            <h2>Resumo</h2>

            <p>
              O projeto desenvolvido para a pós-graduação em User Experience na
              Belas Artes, para a criação de um chatbot na plataforma TakeBlip.
            </p>
            <p>
              O objetivo do chatbot é ser uma ferramenta de recursos adequados e
              suporte emocional para a saúde mental dos usuários, utilizando os
              princípios do UX Writing.
            </p>
            <div>
              <span>
                Papel: <p>UX Writer</p>
              </span>
            </div>
            <div className="mobileEx">
              <img src={SerenityEx} alt="" />
            </div>
          </div>

          <div className="desktopEx">
            <img src={SerenityEx} alt="" />
          </div>
        </ContainerStyled>
        <ContainerDesc>
          <h2>O problema</h2>

          <p>
            Segundo uma pesquisa do Datafolha no final de 2022, oito a cada dez
            brasileiros entre 15 a 29 anos relataram algum tipo de questão
            mental, sendo a maior taxa em meninas e mulheres (90% das
            entrevistadas). A maioria dos jovens relatam que sofreram com
            pensamentos negativos (66%), dificuldade de concentração (58%) e
            crise de ansiedade (53%). Os principais desafios enfrentados pelos
            jovens ao autocuidado e tratamento de sua saúde mental são:
          </p>
          <ul>
            <li>
              Preconceito e estigma: Muitos jovens evitam buscar ajuda por medo
              de julgamento social.
            </li>
            <li>
              Barreiras financeiras e burocráticas: Longas filas para serviços
              gratuitos e dificuldades financeiras dificultam o acesso ao
              tratamento.
            </li>
            <li>
              Desigualdade social: O custo do tratamento e a localização das
              clínicas podem ser obstáculos significativos.
            </li>
            <li>
              Sobrecarga de demandas: Demandas como compromissos com estudos,
              trabalho e vida social podem limitar o tempo dedicado ao
              autocuidado.
            </li>
          </ul>
        </ContainerDesc>
        <ContainerDesc>
          <h2>Persona</h2>
          <ContainerStyledImgs>
            <div>
              <img src={persona3Ex} alt="" />
            </div>

            <div>
              <img className="desktopSocio" src={sociodem3} alt="" />
              <img className="mobileSocio" src={sociodeMobile3} alt="" />
            </div>
          </ContainerStyledImgs>
          <h2 style={{ marginTop: '64px' }}>A Serenity</h2>

          <ContainerStyledImgs>
            <div>
              <img
                style={{ marginBottom: '24px' }}
                src={SerenityPersona}
                alt=""
              />
            </div>

            <div>
              <p>
                A Serenity foi projetada com um tom de voz acolhedor, oferecendo
                auxílio e informações de técnicas de relaxamento com uma
                abordagem empática e receptiva, também aconselhando e dando
                suporte em momentos de crise para os usuários.{' '}
              </p>
              <p>
                A ilustração da Serenity também reflete esses valores de
                acolhimento e apoio. Foi pensado para transmitir calma e
                tranquilidade, com cores suaves, formas fluidas e uma estética
                que remete à uma recepção calorosa e ao bem-estar.
              </p>
              <p>
                Ambos foram projetados para que o usuário se sinta
                constantemente apoiado e compreendido durante toda sua
                experiência ao utilizar o chatbot.
              </p>
            </div>
          </ContainerStyledImgs>
        </ContainerDesc>
        <ContainerDesc>
          <h2>Chatbot - TakeBlip</h2>

          <p>
            O chatbot foi desenvolvido na plataforma TakeBlip, cada interação e
            resposta foi elaborada para ser compreensível, direta e amigável,
            proporcionando ao usuário uma comunicação eficiente e acolhedora
            para o usuário durante todo o processo.
          </p>
          <p>
            Você pode conferir e utilizar o chatbot clicando{' '}
            <span>
              <a
                target="blank"
                href="https://lygia-magalhaes-zcrlp.chat.blip.ai/?appKey=c2VyZW5pdHkxOmZlM2Q3MTY3LTI5NzMtNGQyMC04OGUxLTcyMTcwNTU0YjExYQ==&_gl=1*1fcmk4t*_gcl_au*MTU5MDY0NjY1Mi4xNzMxODcwMjQ1*_ga*MTgxMDkyOTA4MS4xNzMxODcwMjQ2*_ga_8GVWK8YMGL*MTczMjE0NTg1OS4yLjEuMTczMjE0NTg3Mi40Ny4wLjE4NTc1OTY5MzY."
              >
                aqui
              </a>
            </span>
            .
          </p>

          <IframeStyled>
            <img src={userflowChatbot} alt="" />
          </IframeStyled>
        </ContainerDesc>

        <ContainerDesc>
          <h2>Conclusão</h2>

          <p>
            A utilização do UX Writing para o desenvolvimento de textos
            conversacionais do chatbot foi essencial para uma abordagem mais
            humana e acolhedora, permitindo se conectar com o usuário em
            momentos delicados envolvendo sua saúde mental. O chatbot da
            Serenity foi projetado para ser uma ferramenta essencial para quem
            busca apoio emocional de forma acessível e prática.
          </p>
        </ContainerDesc>
      </MainBody>
      <Border style={{ marginTop: '64px' }} />
      <FooterPage />
    </>
  )
}

export default Projeto3
