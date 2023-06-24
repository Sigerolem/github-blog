import { differenceInSeconds } from 'date-fns';

interface ResponseData {
  bio: string;
  company: string;
  followers: number;
  login: string;
  name: string;
}

export async function fetchUserData() {
  const lastFetch = localStorage.getItem('github_blog_last_fetch')
  const lastUserData = localStorage.getItem('github_blog_user_data')

  if (
    lastFetch !== null &&
    lastUserData !== null &&
    differenceInSeconds(new Date(), new Date(lastFetch)) < 60
  ) {
    return JSON.parse(lastUserData) as ResponseData
  }

  const data = await (await fetch('https://api.github.com/users/Sigerolem')).json()

  const { bio, company, followers, login, name } = data as ResponseData
  const newUserData = { bio, company, followers, login, name }

  localStorage.setItem('github_blog_last_fetch', (new Date()).toISOString())
  localStorage.setItem('github_blog_user_data', JSON.stringify(newUserData))

  return newUserData
}