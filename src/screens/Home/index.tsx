import { GpsList } from '../../components/GpsList'
import { HomeHeader } from '../../components/HomeHeader'
import { VehicleInfo } from '../../components/VehicleInfo'
import { Container, Content } from './styles'

export function Home() {
  return (
    <Container>
      <HomeHeader />
      <Content>
        <VehicleInfo />
        <GpsList />
      </Content>
    </Container>
  )
}
