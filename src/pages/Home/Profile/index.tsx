import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProfileContainer, ProfileImg, ProfileInfo } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faBuilding } from '@fortawesome/free-solid-svg-icons';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImg src="http://github.com/sigerolem.png" />
      <ProfileInfo>
        <header>
          <h1>Cameron Williansom</h1>
          <a href="">GITHUB</a>
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