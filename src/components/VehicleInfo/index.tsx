import response from '../../../frontend_data_gps.json'
import { formatLicensePlate } from '../../utils/format-vehicle-plate'
import { Container, Message, VehicleImage } from './styles'

export function VehicleInfo() {
  const vehicleImage = response.vehicle.picture.address
  const vehiclePlate = formatLicensePlate(response.vehicle.plate)

  return (
    <Container>
      <VehicleImage
        source={{
          uri: vehicleImage,
        }}
        alt="Vehicle Image"
      />
      <Message>{vehiclePlate}</Message>
    </Container>
  )
}
