import styled from 'styled-components/native'

export const Container = styled.View`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_950};

  justify-content: center;
  align-items: center;
  margin-right: 12px;

  width: 46px;
  height: 46px;
`
