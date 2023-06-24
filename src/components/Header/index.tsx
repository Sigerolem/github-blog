import { HeaderContainer } from './styles';
import blogLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer >
      <img src={blogLogo} />
    </HeaderContainer>
  )
}