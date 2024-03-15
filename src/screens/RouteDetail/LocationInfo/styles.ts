import styled from 'styled-components/native'

export const Container = styled.Pressable`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const Info = styled.View`
  flex: 1;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_950};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`
