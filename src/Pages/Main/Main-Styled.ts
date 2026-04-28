import styled from 'styled-components'
import blobs from '../../images/blobs.png'
import TextureCard from '../../images/rectangle.png'
import rectangleHover from '../../images/rectangleHover.png'
import linkedin from '../../images/linkedin.png'
import behance from '../../images/behance.png'
import linkedinHover from '../../images/linkedinHover.png'
import behanceHover from '../../images/behanceHover.png'

export const MainBody = styled.div`
  max-width: 1296px;
  width: 100%;
  margin: 72px auto 0;
  padding: 0 64px;
  color: #f3f3f3;

  @media (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  h2 {
    color: #7077ec;
    margin-bottom: 32px;
    font-family: 'Bai Jamjuree', sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
  }

  h1 {
    margin-bottom: 32px;
    font-weight: 500;
    color: #f3f3f3;
    font-family: 'Bai Jamjuree', sans-serif;
    font-size: 32px;
    line-height: 40px;
  }

  p {
    margin-bottom: 32px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-family: 'Assistant', sans-serif;
  }

  .LinksPrincipais {
    .icone {
      width: 20px;
      height: 20px;
      background-image: url(${linkedin});
      background-size: contain;
    }

    .icone2 {
      width: 20px;
      height: 20px;
      background-image: url(${behance});
      background-size: contain;
    }

    ul {
      display: flex;
      gap: 16px;
      padding: 0;

      li {
        list-style: none;

        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 134px;
          border: 1px solid #c6f688;
          border-radius: 24px;
          padding: 8px;

          &:hover {
            cursor: pointer;
            background-color: #c6f688;

            .icone {
              background-image: url(${linkedinHover});
            }

            .icone2 {
              background-image: url(${behanceHover});
            }

            p {
              color: #131513;
            }
          }

          span {
            display: flex;
            align-items: center;
            gap: 8px;

            p {
              font-size: 16px;
              line-height: 24px;
              color: #f3f3f3;
              font-family: 'Assistant', sans-serif;
              margin-bottom: 0;

              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
`

export const Projetos = styled.section`
  width: 100%;
  background-image: url(${blobs});
  background-repeat: no-repeat;
  background-position: center 30%;
  background-size: cover;
  padding: 64px 0;
  margin-top: 64px;

  .cards li a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }

  .sectName {
    font-size: 32px;
    line-height: 40px;
    font-family: 'Bai Jamjuree', sans-serif;
    font-weight: 300;
    margin-bottom: 32px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    width: 100%;
    padding: 0;
    list-style: none;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }

    li {
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 32px;
      border: 1px solid #f3f3f3;
      background-image: url(${TextureCard});
      background-size: cover;
      background-position: center;
      overflow: hidden;

      &:hover {
        background-image: url(${rectangleHover});
        cursor: pointer;
      }

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
        border-bottom: 1px solid #f3f3f3;
      }

      h3 {
        padding-left: 24px;

        margin-top: 24px;
        margin-bottom: 4px;
        font-size: 22px;
        line-height: 28px;
        font-weight: 400;
        font-family: 'Bai Jamjuree', sans-serif;
      }

      h5 {
        padding-left: 24px;

        margin-bottom: 16px;
        color: #c6f688;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        font-family: 'Assistant', sans-serif;
      }

      p {
        padding-left: 24px;

        margin-bottom: 32px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: 'Assistant', sans-serif;
      }

      h3,
      h5,
      p {
        width: 90%;
        text-align: left;
      }
    }
  }
`

export const Container = styled.div`
  max-width: 1296px;
  margin: 0 auto;
  padding: 0 64px;

  @media (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export const Border = styled.div`
  border-top: 1px solid #707070;
  margin-bottom: 66px;
`
