import { useNavigate } from 'react-router-dom';
import { AnchorComponent } from './styles';
import { AnchorHTMLAttributes } from 'react';

interface BrandLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function BrandLink({ children, ...rest }: BrandLinkProps) {
  const navigate = useNavigate()

  if (rest.href === '-1') {
    return (
      <AnchorComponent onClick={() => { navigate(-1) }}>
        {children}
      </AnchorComponent>
    )
  }


  return (
    <AnchorComponent {...rest} >
      {children}
    </AnchorComponent>
  )
}