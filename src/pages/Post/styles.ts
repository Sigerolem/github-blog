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
      /* font-size: ${({ theme }) => theme.textSizes['text-m']}; */
    }
  }
`

export const ContentContainer = styled.section`
  width: 100%;
  padding-bottom: 2rem;
`