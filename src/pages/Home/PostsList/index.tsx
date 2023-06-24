import { ChangeEvent, FormEvent, useState } from 'react'
import { PostsContainer, SerchForm } from './styles'
import { UserDataType, fetchPosts } from '../../../utils/fetchPosts'
import { PostCard } from '../PostCard'

interface PostsListProps {
  postsData: UserDataType
}

export function PostsList({ postsData }: PostsListProps) {
  const [posts, setPosts] = useState(postsData)
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetchPosts(inputValue).then(postsFetched => {
      setPosts(postsFetched)
    })
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  return (
    <>
      <SerchForm onSubmit={handleSubmit}>
        <div>
          <h3>Publicações</h3>
          <span>{posts.totalCount} publicações</span>
        </div>
        <input placeholder='Buscar conteúdo' value={inputValue} onChange={handleInputChange} />
      </SerchForm>
      <PostsContainer >
        {posts.posts.map(post => {
          return (
            <PostCard key={post.id} post={post} />
          )
        })}
      </PostsContainer>
    </>
  )
}