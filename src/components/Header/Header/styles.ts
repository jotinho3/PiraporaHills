import styled from 'styled-components';
import { HTMLAttributes, CSSProperties } from "react";
import {  motion, Variants } from "framer-motion";
import { VariantLabels } from "framer-motion";


export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  z-index: 999;
`;

export const HeaderIcon = styled.img`
    height: 60px;

`

export const NavbarContainer = styled.nav`

    width: 100%;
    margin: 0 60px;

    @media (max-width: 868px) {

      margin: 0 10px;
      
      
    }
`

export const NavbarFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 868px) {
      
      
    }
   


`

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;


  @media (max-width: 868px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  margin: 0 10px;

 
  
`;


export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  

  &:active{
    transform: scale(120%);
    transition: 0.2s;
    
  }



  @media (max-width: 868px) {
    display: block;
  }

  & > div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #fff;
  }

  

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #3b82f6;
  }
`;


interface DropdownMenuProps extends HTMLAttributes<HTMLUListElement> {
    isOpen: boolean;
    onClose: () => void;
    variants: Variants;
    initial: VariantLabels; 
    animate: VariantLabels;
    exit: VariantLabels;
    css?: CSSProperties;
  }
  
 

export const DropdownMenu = styled(motion.ul)<DropdownMenuProps>`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 0;




`;

export const DropdownLink = styled.li`
  margin: 0;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ActiveLink = styled(Link)`
  text-decoration: underline;
`;

export const DropdownLinkText = styled(Link)`
  display: block;
  padding: 10px;
`;
