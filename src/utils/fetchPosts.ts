import { differenceInSeconds } from 'date-fns';

type IssueType = {
  number: number;
  body: string;
  title: string;
  created_at: string;
}

type PostType = {
  id: number;
  body: string;
  title: string;
  createdAt: string;
}

interface FetchResponse {
  total_count: number,
  items: IssueType[]
}

export type UserDataType = { totalCount: number, posts: PostType[] }

export async function fetchPosts(query = '') {
  const lastFetch = localStorage.getItem('github_blog_last_issues_fetch')
  const lastIssuesData = localStorage.getItem('github_blog_issues_data')

  if (
    query === '' &&
    lastFetch !== null &&
    lastIssuesData !== null &&
    differenceInSeconds(new Date(), new Date(lastFetch)) < 30
  ) {
    return JSON.parse(lastIssuesData) as { totalCount: number, posts: PostType[] }
  }

  const data = await (await fetch(`https://api.github.com/search/issues?q=repo:sigerolem/github-blog%20${query}`)).json() as FetchResponse;
  const totalCount = data.total_count

  let posts = [] as PostType[]

  if (totalCount > 0) {
    posts = data.items.map(({ body, created_at, number, title }) => {
      return {
        id: number,
        title,
        createdAt: created_at,
        body
      }
    })
  }

  if (query === '') {
    localStorage.setItem('github_blog_last_issues_fetch', (new Date()).toISOString())
    localStorage.setItem('github_blog_issues_data', JSON.stringify({ totalCount, posts }))
  }

  return { totalCount, posts }
}