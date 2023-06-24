import { Profile } from './Profile';
import { HomeContainer, SerchForm } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SerchForm >
        <div>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder='Buscar conteúdo' />
      </SerchForm>
    </HomeContainer>
  )
}