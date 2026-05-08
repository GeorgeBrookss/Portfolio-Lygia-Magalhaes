import styled from 'styled-components'

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1296px;
  width: 100%;
  margin-top: 140px;

  h1 {
    width: fit-content;
  }

  h2 {
    width: fit-content;
  }

  .mobileEx {
    display: none;

    @media (max-width: 768px) {
      display: block;
      justify-self: center;

      img {
        max-width: 615;
        width: 100%;
        height: 243px;
      }
    }
  }

  .desktopEx {
    display: block;

    @media (max-width: 768px) {
      display: none;
    }
  }

  p {
    width: fit-content;
  }

  span {
    width: fit-content;
    display: flex;
    gap: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #7077ec;
    font-family: 'Bai Jamjuree', serif;
    font-weight: 500;
  }
  p {
    width: fit-content;
    max-width: 1296px;
    color: #f3f3f3;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-family: 'Assistant', serif;
  }

  img {
    width: 438px;
    height: 341px;
  }
`
export const ContainerDesc = styled.div`
  margin-top: 64px;

  h2 {
    max-width: 1296px;
    width: fit-content;
  }

  p {
    width: fit-content;
    max-width: 1296px;

    @media (max-width: 768px) {
      padding-right: 0;
    }
  }

  ul {
    li {
      font-family: 'Assistant', serif;
    }
  }

  span {
    a {
      color: #c6f688;
      font-weight: 400;
    }
  }
`
export const ContainerStyledImgs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 1296px;

  @media (max-width: 1024px) {
    display: block;
    justify-self: center;
  }

  .desktopSocio {
    max-width: 934px;
    width: 100%;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .mobileSocio {
    display: none;
    max-width: 400px;
    width: fit-content;

    @media (max-width: 1024px) {
      margin-top: 24px;
      display: block;
    }
    @media (max-width: 425px) {
      width: 280px;
    }
  }
  img {
    max-width: 935px;
    @media (max-width: 1024px) {
      margin-top: 24px;
      display: block;
      justify-self: center;
    }
  }
`
export const IframeStyled = styled.div`
  img {
    border: 1px solid rgba(0, 0, 0, 0.08);
    max-height: 537px;
    max-width: 1296px;
    width: 100%;

    @media (max-width: 425px) {
      max-width: 364px;
      height: 100%;
    }
  }

  @media (max-width: 425px) {
    max-width: 280px;
    width: 100%;
    margin: 0 auto;

    img {
      max-width: 280px;
      margin: 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`
