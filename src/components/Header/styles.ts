import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 0 32px 16px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`
