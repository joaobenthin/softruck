import { useTranslation } from 'react-i18next'

import response from '../../../frontend_data_gps.json'
import { formatLicensePlate } from '../../utils/format-vehicle-plate'
import {
  Container,
  VehicleImage,
  VehiclePlate,
  VehicleTitle,
  VehicleWrapper,
} from './styles'

export function VehicleInfo() {
  const { t } = useTranslation()

  const vehicleImage = response.vehicle.picture.address
  const vehiclePlate = formatLicensePlate(response.vehicle.plate)

  return (
    <Container>
      <VehicleImage
        source={{
          uri: vehicleImage,
        }}
        alt={t('vehicleInfo.altImage')}
      />
      <VehicleWrapper>
        <VehicleTitle>{t('vehicleInfo.vehiclePlate')}</VehicleTitle>
        <VehiclePlate>{vehiclePlate}</VehiclePlate>
      </VehicleWrapper>
    </Container>
  )
}
