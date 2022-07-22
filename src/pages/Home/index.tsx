import { About } from './components/About'
import { Coffees } from './components/Coffees'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <About />
      <Coffees />
    </HomeContainer>
  )
}
