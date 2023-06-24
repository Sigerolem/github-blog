import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: -5rem auto 0;
`

export const SerchForm = styled.form`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-size: ${({ theme }) => theme.textSizes['title-s']};  
    }
    
    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: ${({ theme }) => theme.textSizes['text-s']};  
    }
  }
  
  input {
    padding: 0.75rem 1rem;
    background-color: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    border-radius: 6px;
    
    &::placeholder {
      font-size: ${({ theme }) => theme.textSizes['text-m']};  
      color: ${({ theme }) => theme.colors['base-label']};
      line-height: 1.6;
    } 
  }
`