import styled from 'styled-components'
import logoHover from '../../images/logoHover.png'
import Logo from '../../images/logo.png'

export const Header = styled.header`
  max-width: 100%;
  border-bottom: 1px solid #707070;
`
export const MainContainer = styled.main`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  max-width: 1296px;
  width: 100%;
  height: 72px;
  margin-left: auto;
  margin-right: auto;
  color: #f3f3f3;

  .logo {
    margin-left: 64px;
    width: 40px;
    background-image: url(${Logo});
    height: 32px;

    &:hover {
      display: inherit;
      background-image: url(${logoHover});
    }

    @media (max-width: 1024px) {
      margin-left: 24px;
    }
  }

  .burger {
    display: none;

    @media (max-width: 768px) {
      display: block;
      margin: 16px 24px;
    }
  }

  ul {
    display: flex;
    gap: 24px;
    margin-right: 72px;
    padding: 0;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      list-style: none;

      a {
        text-decoration: none;
        font-size: 16px;
        color: #f3f3f3;
        padding: 8px 24px;
        border-radius: 24px;

        &:hover {
          background-color: #272b27;
        }
      }
    }

    .botaoCV {
      border: 1px solid #c6f688;

      &:hover {
        background-color: #c6f688;
        color: #131513;
      }
    }
  }
`
