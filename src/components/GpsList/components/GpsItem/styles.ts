import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  padding: 20px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 6px;
  margin-bottom: 12px;
`

export const Info = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

export const LicensePlate = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const Departure = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
`
