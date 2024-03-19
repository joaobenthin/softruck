# Softruck

Este projeto foi desenvolvido como parte de um teste técnico para avaliar minhas habilidades utilizando React Native.

## Instalação

Para executar este projeto localmente, siga estas etapas:

1. Clone este repositório usando o comando:

```bash
git clone https://github.com/joaobenthin/softruck
```

2. Navegue até o diretório do projeto:

```bash
cd softruck
```

3. Instale as dependências usando npm ou yarn

```bash
npm install
```

ou

```bash
yarn install
```

5. Inicie o bundle do projeto:

```bash
npm start
```

## Estrutura do Projeto

- src/: Contém o código-fonte do projeto.
  - @types/: Contém sobrescritas para bibliotecas externas que não possuem tipos TypeScript nativos.
  - assets/: Imagens, fontes e outros recursos estáticos.
  - components/: Componentes reutilizáveis.
  - config/: Configurações do aplicativo.
  - constants/: Constantes do aplicativo.
  - locales/: Arquivos de internacionalização (i18n).
  - routes/: Configuração de navegação.
  - screens/: Telas do aplicativo.
  - theme/: Arquivos relacionados ao tema (cores, fontes, estilos).
  - types/: Contém definições de tipos personalizadas
  - utils/: Funções e utilitários auxiliares.
- App.tsx: Ponto de entrada do aplicativo.
- .env: Variavéis de ambiente.

## Bibliotecas Utilizadas e Justificativa

As seguintes bibliotecas foram utilizadas neste projeto:

[React Navigation](): O React Navigation é uma biblioteca de roteamento e navegação para React Native. Ele facilita a criação de navegação fluida e intuitiva em aplicativos móveis React Native, oferecendo uma ampla gama de opções de navegação.

[Phosphor React Native](): O Phosphor React Native é uma biblioteca de ícones com mais de 1000 ícones de alta qualidade e totalmente personalizáveis, perfeitos para uso em aplicativos React Native. Ele oferece uma ampla variedade de ícones que podem ser facilmente integrados aos componentes do seu aplicativo.

[React Native Config](): O React Native Config é uma biblioteca que permite gerenciar variáveis de ambiente e configurações específicas do ambiente em aplicativos React Native. Isso é útil para separar configurações entre ambientes de desenvolvimento, teste e produção.

[React Native Maps](): O React Native Maps é uma biblioteca que fornece componentes para integrar mapas interativos em aplicativos React Native. Ele permite exibir mapas, adicionar marcadores, polígonos e muito mais, usando a API de mapas do Google Maps ou do Mapbox.

[React Native Maps Directions](): O React Native Maps Directions é uma extensão do React Native Maps que adiciona suporte para obter direções e rotas entre dois pontos geográficos. Ele é útil para exibir rotas e orientações dentro do seu aplicativo React Native.

[Styled Components](): Styled Components é uma biblioteca popular para estilização de componentes em React e React Native. Ela permite escrever estilos CSS diretamente no seu código JavaScript ou TypeScript, facilitando a criação de componentes estilizados e reutilizáveis.

[@rocketseat/eslint-config](): Este é um conjunto de configurações do ESLint fornecido pela Rocketseat, otimizado para projetos React Native. O ESLint é uma ferramenta de análise estática de código que ajuda a identificar e corrigir problemas de estilo e boas práticas de codificação no código JavaScript.

[eslint-plugin-simple-import-sort](): Este é um plugin para o ESLint que implementa uma regra de ordenação de imports simples e direta. Ele ajuda a manter a consistência na organização dos imports no seu código JavaScript, melhorando a legibilidade e a manutenibilidade.

[i18next](): O i18next é uma biblioteca de internacionalização (i18n) para JavaScript, oferecendo suporte multilíngue e facilitando a localização do aplicativo. Optamos por sua flexibilidade e ampla adoção na comunidade de desenvolvimento, tornando-o uma escolha ideal para projetos React Native que visam atender a um público global.

> A decisão de instalar uma biblioteca dentro do projeto na minha opinião tem que ser levado vários fatores, como por exemplo:

- É possível fazer sem biblioteca?
- Possui compatibilidade com a versão do React Native?
- Popularidade e suporte da comunidade
- A instalação da biblioteca vai facilitar o desenvolvimento e trazer produtividade?
- A biblioteca possui uma boa documentação?
- Ela está sendo atualizada e mantida pela comunidade (caso seja open-source) e não está depreciada?

## Pontos de melhoria

- Desenvolvimento de uma página de histórico utilizando as coordenadas (latitude e longitude). Utilizar a API do Google Maps para retornar o endereço utilizando as coordenadas.
- Utilizar um design system para desenvolvimento das telas, componentes e textos próprios para o aplicativo.
- Implementar um login social utilizando Google Auth, Apple Auth por exemplo para entrar no app
- Adicionar animações para tornar a experiência do usuário mais agradável
- Selecionar o idioma inicial baseado na localização do usuário
