import styled from 'styled-components';

export const AnchorComponent = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors['brand-blue']};
  font-size: ${({ theme }) => theme.textSizes['link']};
  font-weight: 700;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  transition: border .3s;
  
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors['brand-blue']};
  }
`