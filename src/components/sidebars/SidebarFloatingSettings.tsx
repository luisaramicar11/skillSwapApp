import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StyledNavLink from "../ui/links/NavLinks";

const NavList = styled.ul`
    list-style: none;
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0;
    padding: 0;
    padding-right: 40px;
    padding-left: 20px;
`;

const NavItem = styled.li`
    display: inline-block;
    font-size: 16px;
    cursor: pointer;

    & a {
        padding: 0;
        color: ${({ theme }) => theme.colors.textSecondary};
    }
`;

const SidebarContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    height: 300px;
    width: min-content;
    top: 74px;
    right: 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.textWhite};
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 1px solid ${({ theme }) => theme.colors.textBlack};
    display: flex;
    align-items: start;
    justify-content: end;
    padding: 40px 20px;
    transition: 0.5s ease-in-out;
`;

interface SettingsSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const SettingsFloatingSidebar: React.FC<SettingsSidebarProps> = ({ isOpen, onClose }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const changePage = (page: string) => {
        localStorage.setItem('currentPage', page);
        window.dispatchEvent(new Event('storage')); // Disparar el evento para actualizar en otros componentes
    };
    

    if (!isOpen) return null;

    return (
        <SidebarContainer ref={sidebarRef} isOpen={isOpen}>
            <NavList>
                <NavItem onClick={() => changePage('PERFIL')}>
                    <StyledNavLink href="/user/profile" label="PERFIL" />
                </NavItem>
                <NavItem onClick={() => changePage('SKILLS')}>
                    <StyledNavLink href="/user/skills" label="SKILLS" />
                </NavItem>
                <NavItem onClick={() => changePage('MÉTRICAS')}>
                    <StyledNavLink href="/user/metrics" label="MÉTRICAS" />
                </NavItem>
                <NavItem onClick={() => changePage('SOCIAL')}>
                    <StyledNavLink href="/user/social" label="SOCIAL" />
                </NavItem>
                <NavItem onClick={() => changePage('INFO')}>
                    <StyledNavLink href="/user/info" label="INFO" />
                </NavItem>
            </NavList>
        </SidebarContainer>
    );
};

export default SettingsFloatingSidebar;