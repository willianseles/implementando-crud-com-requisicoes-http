import api from "./api.js"

const ui = {
  async renderizarPets() {
    const listaPets = document.getElementById("lista-pets");
    listaPets.innerHTML = "";

    try {
      const pets = await api.buscarInformacoesPets();
        pets.forEach(ui.adicionarPetNaLista);
    } catch (error) {
      console.error("Erro ao obter pets:", error);
      alert("Erro ao obter pets. Tente novamente mais tarde.");
    }
  },

  adicionarPetNaLista(pet) {
    const listaPets = document.getElementById("lista-pets");
    const li = document.createElement("li");
    li.setAttribute("data-id", pet.id);
    li.classList.add("li-pet");

    const nomePet = document.createElement("div");
    nomePet.textContent = `Nome: ${pet.nome}`;
    nomePet.classList.add("pet-nome");

    const especiePet = document.createElement("div");
    especiePet.textContent = `Especie: ${pet.especie}`;
    especiePet.classList.add("pet-especie");

    const racaPet = document.createElement("div");
    racaPet.textContent = `Raça: ${pet.raca}`;
    racaPet.classList.add("pet-raca");

    li.appendChild(nomePet);
    li.appendChild(especiePet);
    li.appendChild(racaPet);
    listaPets.appendChild(li);
  },
};

export default ui;