Na aula, aprendemos sobre como buscar dados de uma aplicação back-end utilizando a função fetch() do JavaScript. Começamos conhecendo a estrutura dos dados em formato JSON, que é leve e muito utilizado para troca de informações na internet.

Através do console do navegador, criamos uma função chamada buscarPensamentos(), que utiliza fetch() para fazer uma solicitação à URL localhost:3000/pensamentos, onde estão armazenados os pensamentos. Essa função é assíncrona, então usamos async e await para lidar com a promessa retornada pelo fetch().

Após obter a resposta, que é uma response, precisamos convertê-la para um formato que possamos manipular. 
Para isso, utilizamos o método json() da response, que também retorna uma promessa. Com isso, conseguimos acessar os dados em formato de objeto JavaScript, prontos para serem utilizados na nossa aplicação.

Assim, a aula nos mostrou como estabelecer a comunicação entre o front-end e o back-end e como manipular os dados recebidos.