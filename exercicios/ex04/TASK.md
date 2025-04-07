1) Implementando a função de exclusão
Após a adoção do pet, é importante conseguir excluir o registro dele do site (o que é ótimo, pois significa que ele conseguiu um lar). Vamos implementar essa funcionalidade?

Sua tarefa é: escreva o código de uma função que envia uma requisição para API e exclui um pet específico pelo ID.

Faça-a no arquivo “api.js” (ou conforme você o tiver nomeado). O título da função pode ser algo como deletarPet.

2) Adicionando botão de exclusão na interface
Vamos prosseguir direto do exercício anterior.

Com a função de exclusão pronta na API, vamos ajustar a interface para permitir a exclusão de pets diretamente da lista.

Para cumprir isso, atualize a interface e adicione um botão de exclusão para cada pet listado e implemente a lógica para excluir o pet quando o botão for clicado.

3) Melhorando o código com uma constante para a URL base
Agora que todas as funcionalidades do CRUD foram implementadas, sua missão é melhorar o código para evitar a repetição da URL base em várias funções, criando uma constante que poderá ser reutilizada.

