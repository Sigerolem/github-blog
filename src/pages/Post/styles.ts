import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  max-width: 54rem;
`

export const PostHeader = styled.div`
  height: max-content;
  background: ${({ theme }) => theme.colors['base-profile']}; 
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  header {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: .5rem;
      line-height: 0;
      padding-bottom: .25rem;
    } 
  }

  h1 {
    margin-top: 1.25rem;  
  }

  ul {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      color: ${({ theme }) => theme.colors['base-label']};
    }
    
    span {
      line-height: 0;
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }
  
  @media (max-width: 700px) {
    padding: 1.5rem;
    h1 {
      margin-top: .5rem;
    }
  }

  @media (max-width: 550px) {
    ul {
      flex-direction: column;
      gap: .5rem;
      margin-top: .75rem;
       li {
        gap: .75rem;
       }
    }
  }
`

export const ContentContainer = styled.section`
  width: 100%;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1, h2, h3 {
    color: ${({ theme }) => theme.colors['base-title']};
  }
  
  a {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  img {
    width: 100%;
  }

  pre {
    background-color: ${({ theme }) => theme.colors['base-post']};
    padding: 0.5rem;
    border-radius: 6px;
  }

  ul, ol {
    margin-left: 1.25rem;
  }

  @media (max-width: 750px) {
    padding: 1rem;
    
    pre {
      overflow: auto;
    }
  }
`