![Thumbnail](./thumb.png)

# Memoteca

Memoteca é um aplicativo organizador de pensamentos e frases que permite cadastrar, listar, editar e deletar pensamentos, incluindo informações como conteúdo e autoria.

## 🔨 Funcionalidades do projeto

`Cadastro de pensamentos`: Permite adicionar novos pensamentos à lista, inserindo informações como conteúdo e autoria.

`Listagem de pensamentos`: Exibe os pensamentos cadastrados, permitindo visualizar o texto e a autoria.

`Edição de pensamentos`: Permite editar pensamentos existentes, atualizando as informações conforme necessário.

`Exclusão de pensamentos`: Permite remover pensamentos da lista.

## ✔️ Técnicas e tecnologias utilizadas

`JavaScript`: Linguagem de programação utilizada para desenvolver a lógica do aplicativo.

`Fetch API`: Utilizada para realizar requisições HTTP para comunicação com o servidor.

`Axios`: Biblioteca usada para facilitar e simplificar as requisições HTTP.

`Node.js`: Plataforma utilizada para executar o ambiente de desenvolvimento.

`JSON Server`: Utilizado para simular um backend e facilitar o desenvolvimento e teste das operações CRUD.

`CSS`: Utilizado para estilização da interface do aplicativo.


## 📁 Link do Figma

Você pode [acessar o figma do projeto aqui](https://www.figma.com/design/Sz1gmmemxqcB3amInL4Ndp/Rebrand-Memoteca-%7C-Curso-CRUD?node-id=148-26&t=FpdmfbiM1i1s6REQ-0).

## 🛠️ Abrir e rodar o projeto

Para executar a API fake, você vai precisar do NodeJS; a versão utilizada foi a 20.12.2.

Instale o JSON Server globalmente (se ainda não estiver instalado):

```bash
npm install -g json-server

```pasta backend
cd backend
npm init -y


Para executar, abra um novo terminal e, dentro da pasta backend, execute:

```bash
npm start
```

Acesse o backend localmente em seu navegador:

http://localhost:3000

Para executar o frontend, abra o projeto no Visual Studio Code. Com a extensão Live Server instalada, clique com o botão direito no arquivo index.html e selecione "Open with Live Server" no menu de contexto.

Acesse o frontend localmente em seu navegador:

http://localhost:5500



O que é CRUD? 

C (Create) Cadastar 
R (Read) Listar
U (Update) Alterar
D (Delete) Excluir

 - Create (Criar): Responsável por criar novos registros ou recursos no sistema. Na prática, isso envolve inserir novos dados na base de dados, como adicionar um novo contato em uma lista de contatos. No caso do nosso projeto, foi a operação que fizemos de adicionar um novo pensamento no mural do Memoteca.

- Read (Ler): Realiza a leitura ou recuperação de informações existentes da base de dados. É usado para consultar e visualizar dados, como listar todos os contatos salvos em um sistema. No caso do nosso projeto, foi a operação GET que fizemos para recuperar a lista de pensamentos da API fake.

- Update (Atualizar): Atualiza registros existentes na base de dados com novas informações. Por exemplo, modificar o número de telefone de um contato já existente. No memoteca, o update corresponde a editar um pensamento do mural.

 - Delete (Deletar): Remove registros ou recursos existentes da base de dados. Isso implica na exclusão permanente dos dados, como remover um contato da lista. Como vimos nesta aula, é a operação que deleta um pensamento com o método DELETE.

---/--/--- 
 - protocolo HTTP e métodos CRUD

POST: Utilizado para criar novos recursos no servidor, correspondendo à operação de create;

GET: Usado para buscar informações ou recursos do servidor, equivalente à operação de read;

PUT: Atualiza informações de um recurso específico no servidor, correspondendo à operação de update;

DELETE: Remove um recurso específico do servidor, equivalente à operação de delete.