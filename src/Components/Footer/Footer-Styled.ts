import styled from 'styled-components'

export const Footer = styled.footer`
  max-width: 934px;
  width: 100%;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Assistant', sans-serif;
  color: #f3f3f3;
  border-bottom: 1px solid #707070;
  margin-left: 42px;
  margin-right: 42px;
  padding: 0;

  @media (max-width: 1024px) {
    width: 700px;
  }

  @media (max-width: 764px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 421px) {
    width: 300px;
  }

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
    gap: 24px;

    @media (max-width: 768px) {
    }
    @media (max-width: 1024px) {
    }

    li {
      list-style: none;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`
export const Copyright = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  max-width: 934px;
  width: 100%;
  justify-self: center;
  font-family: 'Inter', sans-serif;
  color: #707070;
  font-size: 12px;
  line-height: 16px;

  @media (max-width: 1024px) {
    width: 700px;
  }

  @media (max-width: 764px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 421px) {
    width: 300px;
  }
`
