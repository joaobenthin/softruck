import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
`

export const Content = styled.View`
  flex: 1;
  padding: 0 32px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  margin-bottom: 12px;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  margin-top: 32px;
  text-align: center;
`
