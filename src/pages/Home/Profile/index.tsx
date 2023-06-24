import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProfileContainer, ProfileImg, ProfileInfo } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faBuilding, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { BrandLink } from '../../../components/BrandLink';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImg src="https://github.com/sigerolem.png" />
      <ProfileInfo>
        <header>
          <h1>Cameron Williansom</h1>
          <BrandLink href="">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </BrandLink>
        </header>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>Sigerolem</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Disponível</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>3 seguidores</span>
          </li>
        </ul>
      </ProfileInfo>
    </ProfileContainer>
  )
}