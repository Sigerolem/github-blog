import styled from 'styled-components'

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

  @media (max-width: 750px) {
    margin-top: 1.5rem;
  }
  `

export const PostsContainer = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 750px) {
    margin-top: 2rem;
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    margin-top: 1.5rem;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`