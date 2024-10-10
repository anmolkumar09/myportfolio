
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { useTheme } from '@mui/material';

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  padding: 0 20px;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const NavLogo = styled(LinkR)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: inherit;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none; // Hide on mobile
  }
`;

const NavLink = styled(LinkR)`
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  padding: 0 6px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none; // Hide on mobile
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.primary};
  }
`;

const MobileIcon = styled.div`
  display: none; // Initially hidden

  @media screen and (max-width: 768px) {
    display: flex; // Show on mobile
    align-items: center;
    justify-content: center;
    cursor: pointer; // Change cursor to pointer for better UX
    padding: 0 10px; // Add padding for better touch target
  }
`;

const MobileMenu = styled.ul`
  display: ${({ IsOpen }) => (IsOpen ? "flex" : "none")}; // Show when open
  flex-direction: column;
  align-items: flex-start; 
  gap: 32px;
  list-style: none;
  width: 100%;
  background: ${({ theme }) => theme.card_light}; 
  padding: 12px 40px;
  position: absolute;
  top: 80px;
  right: 0;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
  opacity: ${({ IsOpen }) => (IsOpen ? "1" : "0")}; 
  transition: all 0.3s ease-in-out; 
  pointer-events: ${({ IsOpen }) => (IsOpen ? "auto" : "none")}; 
  transform: translateY(${({ IsOpen }) => (IsOpen ? "0" : "-10px")}); 

  @media screen and (min-width: 769px) {
    display: none; // Hide when viewport is wide enough
  }
`;

const Navbar = () => {
    const [IsOpen, SetIsOpen] = useState(false);
    const theme = useTheme();
    // Close menu when resizing window to a larger size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                SetIsOpen(false); // Close menu on resize
            }
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">PortFolio</NavLogo>

                <MobileIcon onClick={() => SetIsOpen(!IsOpen)}>
                    <MenuRounded />
                </MobileIcon>

                <NavItems>
                    <NavLink to="#about">About</NavLink>
                    <NavLink to="#skills">Skills</NavLink>
                    <NavLink to="#experience">Experience</NavLink>
                    <NavLink to="#projects">Projects</NavLink>
                    <NavLink to="#education">Education</NavLink>
                </NavItems>

                <MobileMenu IsOpen={IsOpen}>
                    <NavLink onClick={()=> SetIsOpen(!IsOpen)} to="#about">About</NavLink>
                    <NavLink onClick={()=> SetIsOpen(!IsOpen)} to="#skills">Skills</NavLink>
                    <NavLink onClick={()=> SetIsOpen(!IsOpen)} to="#experience">Experience</NavLink>
                    <NavLink onClick={()=> SetIsOpen(!IsOpen)} to="#projects">Projects</NavLink>
                    <NavLink onClick={()=> SetIsOpen(!IsOpen)} to="#education">Education</NavLink>
                    <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer" style={{
                      background: theme.primary,
                      color: theme.text_primary
                    }}>
                        Github Profile
                    </GithubButton>
                </MobileMenu>

                <ButtonContainer>
                    <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
                        Github Profile
                    </GithubButton>
                </ButtonContainer>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
