## Frontend do Desafio CoreLab

Este projeto representa o frontend para o Desafio CoreLab, desenvolvido com Next.js, TypeScript, Axios, e React Icons, com o objetivo de consumir uma API REST criada com AdonisJS para manipulação de um banco de dados MySQL. A aplicação frontend permite aos usuários visualizar, adicionar, editar e deletar notas, além de marcá-las como favoritas, proporcionando uma interface interativa e amigável.

# Tecnologias Utilizadas

Next.js: Um framework React para produção que oferece diversas funcionalidades como renderização do lado do servidor e geração de sites estáticos.

TypeScript: Um superconjunto de JavaScript que adiciona tipagem estática ao código, permitindo um desenvolvimento mais seguro e eficiente.

Axios: Uma biblioteca cliente HTTP baseada em promessas para fazer requisições HTTP, usada para comunicar com a API REST.

React Icons: Uma biblioteca que inclui ícones populares, permitindo fácil integração de ícones em projetos React.

# Pré-requisitos

Para rodar este projeto na sua máquina, você precisará ter instalado:

Node.js (Preferencialmente na última versão LTS)
NPM (Vem instalado com o Node.js) ou Yarn

# Configuração

Clone o Repositório

Clone este repositório para sua máquina local usando:

```bash
git clone https://github.com/seuusuario/seuprojeto.git](https://github.com/vitorkravs/web-challenge-corelab.git
```

Instale as Dependências

Navegue até a pasta do projeto clonado e instale as dependências necessárias:

```bash
cd seuprojeto
npm install
```

# Configuração do Ambiente

Abra o cmd no seu computador e digite o seguinte comando:

```bash
ipconfig
```

Em seguida ache o Adaptador de Rede sem Fio Wi-Fi e veja seu IPv4.

Agora no seu projeto configure as variáveis de ambiente criando um arquivo .env na raiz do projeto. Você precisará adicionar a URL da sua API para que o frontend possa se comunicar com ela. Por exemplo:

```bash
NEXT_PUBLIC_API_URL=IPv4DoSeuComputador:3333
```

Poderia no lugar do seu ip ser [locahost], porém com o uso do seu ip você poderá acessar o projeto no seu próprio celular se estiver conectado ao mesmo roteador wifi.

# Executando o Projeto

Após configurar as variáveis de ambiente, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Agora você pode acessar o projeto com [http://localhost:3000] no seu navegador para ver a aplicação rodando, ou também pode utilizar [http://IPv4DoSeuComputador:3000] no seu celular.

# Contribuindo

Contribuições são sempre bem-vindas! Para contribuir, por favor, crie um fork do projeto, faça suas alterações e abra um Pull Request.

### Feito por Vitor Cesar Kravszenko
