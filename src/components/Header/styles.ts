import styled from 'styled-components';
import headerBg from '../../assets/banner.svg'

export const HeaderContent = styled.header`
  background: url(${headerBg}) no-repeat center;
  height: 18.5rem;
  
  display: flex;
  align-items: start  ;
  justify-content: center;

  img {
    margin-top: 4rem;
    width: 9.25rem;
  }
`