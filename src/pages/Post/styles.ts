import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  max-width: 54rem;
`

export const PostHeader = styled.div`
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
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 0.5rem;
    height: 1.625rem;
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

  em {
    
  }

  ul, ol {
    margin-left: 1.25rem;
  }
`