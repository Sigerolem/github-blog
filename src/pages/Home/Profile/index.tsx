import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProfileContainer, ProfileImg, ProfileInfo } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faBuilding, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { BrandLink } from '../../../components/BrandLink';

type UserData = {
  bio: string;
  company: string;
  followers: number;
  login: string;
  name: string;
}

interface ProfileProps {
  userData: UserData
}

export function Profile({ userData: { bio, company, followers, login, name } }: ProfileProps) {
  return (
    <ProfileContainer>
      <ProfileImg src="https://github.com/sigerolem.png" />
      <ProfileInfo>
        <header>
          <h1>{name}</h1>
          <BrandLink href="">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </BrandLink>
        </header>
        <p>{bio}</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>{login}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{company ?? 'Disponível'}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{followers} seguidores</span>
          </li>
        </ul>
      </ProfileInfo>
    </ProfileContainer>
  )
}