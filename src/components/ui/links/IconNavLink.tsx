import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ILinkProps } from '@/src/models/link.model';
import { handlePageChange } from '../../../lib/utils/handlePageTheme';

const IconNavLinkComponent = styled(Link)`
  text-decoration: none;
  padding: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
  display: flex;
  transition: 0.4s;
  align-items: center; 
  justify-content: center;

  & svg {
    display: flex;
    align-items: center; 
    justify-content: center;
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.textWhite}; 
  }

  &:hover {
    transition: 0.4s;
    transform: scale(0.9);
    font-weight: 700; 
  }
`;

const StyledIconNavLink: React.FC<ILinkProps & { icon: React.ReactNode }> = ({ href, label, onClick, icon }) => {
    return (
        <IconNavLinkComponent
            href={href}
            onClick={() => {
                handlePageChange(label ?? 'default-label');
                if (onClick) onClick(label ?? 'default-label');
            }}
        >
            {icon}
        </IconNavLinkComponent>
    );
};

export default StyledIconNavLink;
