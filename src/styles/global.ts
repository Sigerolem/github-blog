import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors['base-background']};
  }
  
  body, a, input {
    color: ${({ theme }) => theme.colors['base-text']};
    font: ${({ theme }) => theme.textSizes['text-m']} Nunito, sans-serif; 
    font-weight: 400;
    line-height: 1.6;  
  }
  
  h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.textSizes['title-l']};
    line-height: 1.3;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors['brand-blue']};
    font-weight: 700;
    display: flex;
    align-items: center;
    border-bottom: 1px solid transparent;

    transition: border .4s;
    
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors['brand-blue']};
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0px 2px ${({ theme }) => theme.colors['brand-blue']}; 
  }

`

