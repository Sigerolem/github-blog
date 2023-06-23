import { HeaderContent } from './styles';
import blogLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContent >
      <img src={blogLogo} />
    </HeaderContent>
  )
}