import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  padding: 2rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  position: relative;
  
  header {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
    
    h2 {
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes['title-m']};
      color: ${({ theme }) => theme.colors['base-title']};
    }
    
    span {
      font-size: ${({ theme }) => theme.textSizes['text-s']};
      margin-top: 0.25rem;
    }
  }
  
  p {
    overflow: hidden;
    /* text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; */
    
    max-height: 7.75rem;
    &::after{
      content: '';
      width: 100%;
      height: 1.6rem;
      background: linear-gradient(transparent 10%, ${({ theme }) => theme.colors['base-post']} 75%);
      position: absolute;
      bottom: 1.75rem;
      left: 0;
    }
  }
`