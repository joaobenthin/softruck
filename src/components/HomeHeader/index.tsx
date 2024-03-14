import { Container, Greeting, Message, Name, Picture } from './styles'

export function HomeHeader() {
  const pictureImage = 'https://github.com/joaobenthin.png'

  return (
    <Container>
      <Picture source={{ uri: pictureImage }} />

      <Greeting>
        <Message>Olá,</Message>
        <Name>João</Name>
      </Greeting>
    </Container>
  )
}
