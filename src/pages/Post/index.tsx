import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import { formatDistanceToNowStrict } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { BrandLink } from '../../components/BrandLink';
import { ContentContainer, PostContainer, PostHeader } from './styles';

interface ApiResponse {
  title: string,
  user: {
    login: string
  },
  created_at: string,
  comments: number,
  body: string,
  html_url: string
}

export function Post() {
  const { body, comments, createdAt, htmlUrl, title, user } = useLoaderData() as Awaited<ReturnType<typeof postLoader>>

  const formatedDate = formatDistanceToNowStrict(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <PostContainer>
      <PostHeader >
        <header >
          <BrandLink href="-1">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </BrandLink>
          <BrandLink href={htmlUrl} target='_blank'>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </BrandLink>
        </header>
        <h1>{title}</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{formatedDate}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments} comentários</span>
          </li>
        </ul>
      </PostHeader>
      <ContentContainer >
        <ReactMarkdown
          children={body}
          linkTarget={'_blank'}
        />
      </ContentContainer>
    </PostContainer>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function postLoader({ params }: LoaderFunctionArgs) {
  const id = params.id as string
  const data = (await (await fetch(`https://api.github.com/repos/sigerolem/github-blog/issues/${id}`)).json() as ApiResponse)

  const { body, comments, created_at, html_url, title, user } = data;
  return {
    title,
    body,
    comments,
    user,
    createdAt: created_at,
    htmlUrl: html_url
  }
}