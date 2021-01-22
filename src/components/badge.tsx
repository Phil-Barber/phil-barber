import React from 'react';
import styled from 'styled-components';

const StyledBadge = styled.button<{ readonly isSelected: boolean }>`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  display: inline-block;
  width: fit-content;
  padding: 0 ${({ theme }) => theme.spacing.xSmall};
  border-radius: ${({ theme }) => theme.spacing.large};
  margin-right: ${({ theme }) => theme.spacing.xxSmall};

  ${({ isSelected, theme }) =>
    isSelected
      ? `
    background-color: ${theme.colors.darkGrey1};
    color: ${theme.colors.lightGrey1};
  `
      : `
    background-color: ${theme.colors.lightGrey1};
    color: ${theme.colors.darkGrey1};
  `}
`;

interface Props {
  children: React.ReactNode;
  className?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const Badge: React.FC<Props> = ({
  children,
  className,
  isSelected = false,
  onClick,
}: Props) => (
  <StyledBadge className={className} isSelected={isSelected} onClick={onClick}>
    {children}
  </StyledBadge>
);
