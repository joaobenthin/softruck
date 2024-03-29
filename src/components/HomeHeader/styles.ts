import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 32px;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`

export const Greeting = styled.View`
  flex: 1;
  margin-left: 12px;
`

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const Picture = styled.Image`
  width: 56px;
  height: 56px;

  border-radius: 8px;
`
