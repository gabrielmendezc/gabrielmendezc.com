import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const BurgerNavigation = styled.ul`
  list-style-type: none;
  margin-top: 96px;

  li {
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    transition: transform 250ms ease-in-out, opacity 400ms ease-in-out;

    &:first-of-type {
      transition-delay: 200ms;
    }

    &:nth-of-type(2) {
      transition-delay: 300ms;
    }

    &:nth-of-type(3) {
      transition-delay: 400ms;
    }

    &:nth-of-type(4) {
      transition-delay: 500ms;
    }

    &:nth-of-type(5) {
      transition-delay: 600ms;
    }
  }

  &.open li {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }

  a {
    color: ${props => props.theme.colorPrimary};
    font-weight: 600;
    font-size: 1.6rem;
    display: block;

    &.active {
      color: ${props => props.theme.linkColor};
      text-decoration: underline;
    }
  }
`;

export const BurgerNavigationWrapper = styled.nav`
  position: fixed;
  background-color: rgb(245, 245, 245);
  background-image: linear-gradient(
    rgb(245, 245, 245) 0%,
    rgba(224, 230, 235, 0) 100%
  );
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 20px;
  z-index: 10;
  transform: translateY(-100%);
  transition: transform 400ms cubic-bezier(0.36, 0.19, 0.41, 0.97);

  &.open {
    transform: translateY(0);
  }
`;

export const Burger = styled.button`
  height: 50px;
  width: 50px;
  position: relative;
  background: none;
  background-color: transparent;
  outline: none;
  border: none;
  z-index: 11;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  flex-direction: column;

  & > span {
    display: none;
  }

  &::before {
    content: '';
    display: block;
    height: 2px;
    width: 22px;
    background-color: ${props => props.theme.colorPrimary};
    transition: transform 300ms cubic-bezier(0.36, 0.19, 0.41, 0.97);
    margin-bottom: 5px;
    border: none;
  }

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 22px;
    background-color: ${props => props.theme.colorPrimary};
    border: none;
    transition: transform 300ms cubic-bezier(0.36, 0.19, 0.41, 0.97);
  }

  &.open {
    &::before {
      transform: translateY(2.65px) rotate(135deg);
    }

    &::after {
      transform: translateY(-4.5px) rotate(45deg);
    }
  }
`;