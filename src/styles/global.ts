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
    text-decoration: none;
  }
  
  h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.textSizes['title-l']};
    line-height: 1.3;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0px 2px ${({ theme }) => theme.colors['brand-blue']}; 
  }

  ::-webkit-scrollbar {
    width: .75rem;
    height: .75rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-input']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors['base-profile']};
    &:hover {
      background: ${({ theme }) => theme.colors['base-border']};
    }
  }

  @media (max-width: 750px) {
    html {
      font-size: 90%;
    }
  }
`

