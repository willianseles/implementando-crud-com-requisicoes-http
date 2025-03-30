Na aula, aprendemos sobre como buscar dados de uma aplicação back-end utilizando a função fetch() do JavaScript. Começamos conhecendo a estrutura dos dados em formato JSON, que é leve e muito utilizado para troca de informações na internet.

Através do console do navegador, criamos uma função chamada buscarPensamentos(), que utiliza fetch() para fazer uma solicitação à URL localhost:3000/pensamentos, onde estão armazenados os pensamentos. Essa função é assíncrona, então usamos async e await para lidar com a promessa retornada pelo fetch().

Após obter a resposta, que é uma response, precisamos convertê-la para um formato que possamos manipular. 
Para isso, utilizamos o método json() da response, que também retorna uma promessa. Com isso, conseguimos acessar os dados em formato de objeto JavaScript, prontos para serem utilizados na nossa aplicação.

Assim, a aula nos mostrou como estabelecer a comunicação entre o front-end e o back-end e como manipular os dados recebidos.


1. O que é a função fetch?
A função fetch é um recurso atual do JavaScript usado para fazer requisições HTTP assíncronas, permitindo a comunicação entre o cliente (front-end) e o servidor (back-end). É especialmente útil para interações com APIs, quando você precisa enviar ou receber dados.

Geralmente, dentro da função fetch inserimos um método que especifica qual a operação deve ser feita: ler ou enviar dados.

2. Quais são os métodos HTTP?
Até agora, exploramos dois métodos:

2.1.GET: Usado para solicitar dados do servidor. Ideal para recuperar informações, como listar pensamentos armazenados em um banco de dados;
2.2. POST: Usado para enviar dados ao servidor. Ideal para criar novos recursos, como adicionar um novo pensamento.

3. O que é a comunicação entre front-end e back-end?
A comunicação entre o front-end e o back-end é fundamental para o funcionamento de aplicações web. O HTTP (HyperText Transfer Protocol) é o protocolo padrão para essa comunicação, funcionando no modelo cliente-servidor.

4. O que é o modelo cliente-servidor?
É a relação que temos entre um cliente e um servidor, na qual há troca de dados.

Cliente: O navegador ou aplicativo que faz a requisição de dados ou recursos. No contexto de uma aplicação web, o cliente é o código JavaScript executado no navegador;
Servidor: O sistema que armazena os dados ou recursos e responde às requisições do cliente, como uma API que manipula dados e lógica de negócio.

5. Como é a estrutura de uma requisição HTTP?
Via de regra, uma requisição HTTP possui as partes a seguir:

5.1. URL: O endpoint (pense que o endpoint é uma espécie de “endereço) do servidor para onde a requisição será enviada;
5.2. Headers: Informações adicionais enviadas junto com a requisição, como o tipo de conteúdo (Content-Type). No caso do nosso app, o tipo de conteúdo é um arquivo no formato JSON;
5.3. Body: O corpo da requisição, onde os dados são enviados (principalmente usado em requisições POST).
Qualquer pessoa que aspira a trabalhar no desenvolvimento de páginas web com JavaScript precisa compreender tais conceitos. A função fetch é indispensável! E, também, a base para a comunicação entre front-end e back-end (essas palavras ficaram claras a você?).

