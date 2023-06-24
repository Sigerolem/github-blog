import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PostContainer, PostHeader } from './styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';


export function Post() {
  return (
    <PostContainer>
      <PostHeader >
        <header >
          <a href="">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </a>
          <a href="">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <h1>Txto aqui que é titulo do post e é grande o suficiente pra quebrar uma linha nesse tamanho pq não cabe tudo numa linha</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>Sigerolem</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>há 2 dias</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            <span>3 comentários</span>
          </li>
        </ul>
      </PostHeader>
    </PostContainer>
  )
}