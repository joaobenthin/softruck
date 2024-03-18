import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  align-items: center;
  justify-content: space-around;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
`

export const LanguageWrapper = styled.View`
  align-items: center;
`

export const LanguageChooseText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const LanguageTextButton = styled.TouchableOpacity`
  margin-top: 8px;
`

interface LanguageTextProps {
  selected: boolean
}

export const LanguageText = styled.Text<LanguageTextProps>`
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  font-size: ${({ theme, selected }) =>
    selected ? theme.FONT_SIZE.XL : theme.FONT_SIZE.LG}px;
  text-decoration-line: ${({ selected }) => (selected ? 'underline' : 'none')};
`

export const NextButtonWrapper = styled.View``

interface NextButtonProps {
  disabled?: boolean
}

export const NextButton = styled.Pressable<NextButtonProps>`
  width: 100%;
  height: 48px;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 4px;

  align-items: center;
  justify-content: center;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`

export const NextButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_950};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`
