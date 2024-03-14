import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
  padding: 22px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_800};

  flex-direction: row;
  align-items: center;
`

export const IconBox = styled.View`
  width: 77px;
  height: 77px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_600};

  margin-right: 12px;

  justify-content: center;
  align-items: center;
`

export const VehicleImage = styled.Image`
  width: 77px;
  height: 77px;
  border-radius: 6px;

  margin-right: 12px;
`

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  flex: 1;
  text-align: justify;
`
