async function buscarPensamentos() {
  const response = await fetch('http://localhost:3000/pensamentos')
  //console.log(response)
  const dados = await response.json()
  console.log(dados)
}

buscarPensamentos()