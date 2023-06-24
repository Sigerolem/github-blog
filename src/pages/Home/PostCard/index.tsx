import { useNavigate } from 'react-router-dom';
import { CardContainer } from './styles';
import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale';

type IssueType = {
  id: number;
  body: string;
  title: string;
  createdAt: string;
}
interface PostCardProps {
  post: IssueType
}

export function PostCard({ post: { body, createdAt, id, title } }: PostCardProps) {
  const navigate = useNavigate()
  const formatedDate = formatDistanceToNowStrict(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <CardContainer onClick={() => { navigate(`post/${id}`) }} >
      <header>
        <h2>{title}</h2>
        <span>{formatedDate}</span>
      </header>
      <p>{body}</p>
    </CardContainer>
  )
}