import { useLoaderData } from 'react-router-dom';

import { fetchPosts } from '../../utils/fetchPosts';
import { fetchUserData } from '../../utils/fetchUserData';
import { PostsList } from './PostsList';
import { Profile } from './Profile';
import { HomeContainer } from './styles';

export function Home() {
  const { userData, postsData } = useLoaderData() as Awaited<ReturnType<typeof homeLoader>>

  return (
    <HomeContainer>
      <Profile userData={userData} />
      <PostsList postsData={postsData} />
    </HomeContainer>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function homeLoader() {
  const userData = await fetchUserData()
  const postsData = await fetchPosts()
  return ({
    userData, postsData
  })
}