import styled from 'styled-components';
import headerBg from '../../assets/banner.svg'

export const HeaderContainer = styled.header`
  background: url(${headerBg}) no-repeat center/cover;
  width: 100%;
  height: 18.5rem;
  
  display: flex;
  align-items: start  ;
  justify-content: center;

  img {
    margin-top: 4rem;
    width: 9.25rem;
  }

  @media (max-width: 750px) {
    height: 14rem;
    
    img {
      margin-top: 2rem;
      width: 8rem;
    }
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    height: 9rem;

    img {
      margin-top: 1rem;
      width: 6rem;
    }
  }
`