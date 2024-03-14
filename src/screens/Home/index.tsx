import { GpsList } from '../../components/GpsList'
import { HomeHeader } from '../../components/HomeHeader'
import { VehicleInfo } from '../../components/VehicleInfo'

export function Home() {
  return (
    <>
      <HomeHeader />
      <VehicleInfo />
      <GpsList />
    </>
  )
}
