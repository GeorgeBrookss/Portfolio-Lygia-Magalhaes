import styled from 'styled-components'

export const Footer = styled.footer`
  max-width: 1196px;
  width: 100%;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Assistant', sans-serif;
  color: #f3f3f3;
  border-bottom: 1px solid #707070;
  margin: 0 auto;
  padding: 0 12px;

  .logo {
    margin-bottom: 24px;
    @media (max-width: 1024px) {
    }
  }

  ul {
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
    margin-right: 0;

    @media (max-width: 768px) {
    }
    @media (max-width: 1024px) {
    }

    li {
      list-style: none;

      img {
        width: 36px;
        height: 40px;
      }
    }
  }
`
export const Copyright = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  max-width: 1196px;
  width: 100%;
  justify-self: center;
  font-family: 'Inter', sans-serif;
  color: #707070;
  font-size: 12px;
  line-height: 16px;

  @media (max-width: 768px) {
    margin: 24px auto;
    padding: 0 12px;
    font-size: 12px;
  }
  @media (max-width: 1024px) {
    margin: 24px auto;
    padding: 0 12px;
  }
`
