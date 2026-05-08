import styled from 'styled-components'
import logoHover from '../../images/logoHover.svg'
import Logo from '../../images/logo.svg'

interface MainContainerProps {
  $menuAberto: boolean
}

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #707070;
  background-color: #131513;
  z-index: 999;
`
export const MainContainer = styled.main<MainContainerProps>`
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
  position: relative;

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
    cursor: pointer;

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
      display: ${({ $menuAberto }) => ($menuAberto ? 'flex' : 'none')};
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      top: 80px;
      left: 0px;
      right: 24px;
      width: 100vw;
      height: auto;
      background-color: #131513;
      padding: 40px 24px;
      gap: 32px;
      border: 1px solid #707070;
      border-radius: 24px;
      z-index: 100;
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
        @media (max-width: 768px) {
          padding: 8px 24px;
          width: 90px;
        }
      }
    }

    .botaoCV {
      border: 1px solid #c6f688;

      @media (max-width: 768px) {
        padding: 12px 32px;
      }

      &:hover {
        background-color: #c6f688;
        color: #131513;
      }
    }
  }
`
