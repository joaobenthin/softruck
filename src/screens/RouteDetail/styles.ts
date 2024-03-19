import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE_800};
`

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-grow: 1;
  padding: 32px;
`

export const Line = styled.View`
  height: 64px;
  width: 1px;
  margin: 4px -2px;
  margin-left: 23px;
  border-width: 1px;
  border-left-color: ${({ theme }) => theme.COLORS.BLUE_400};
`

export const AnimationText = styled.Text`
  text-align: center;
  margin-top: 16px;
`
