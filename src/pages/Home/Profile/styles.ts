import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background: ${({ theme }) => theme.colors['base-profile']}; 
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  display: flex;
  gap: 2rem;

  @media (max-width: 650px) {
    padding: 1rem;
    gap: 1rem;
  }
`

export const ProfileImg = styled.img`
  height: 9.125rem;  
  border-radius: 8px;
  
  @media (max-width: 650px) {
    height: 7rem;
  }
  
  @media (max-width: 450px) {
    height: 4.5rem;
  }
`

export const ProfileInfo = styled.div`
  padding-top: .5rem;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: .5rem;
      line-height: 0;
      padding-bottom: .25rem;
    }
  }

  p {
    margin: 0.5rem 0 auto;
  }

  ul {
    margin-top: .375rem;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
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
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }

  @media (max-width: 550px) {
    padding-top: 0;

    h1 {
      font-size: ${({ theme }) => theme.textSizes['title-m']};
    }

    p {
      line-height: 1.3;
    }

    ul {
      flex-direction: column;
      gap: 0.5rem;
      margin-top: .75rem;
    }
  }
`