// js/ui.js
import api from "./api.js"
const ui = {
  async renderizarPets() {
    const listaPets = document.getElementById("lista-pets");
    try {
      const pets = await api.buscarInformacoesPets();
      pets.forEach(pet => {
        listaPets.innerHTML += `
          <li class="li-pet" data-id="${pet.id}">
            <div class="pet-especie">Espécie: ${pet.especie}</div>
            <div class="pet-nome">Nome: ${pet.nome}</div>
            <div class="pet-raca">Raça: ${pet.raca}</div>
          </li>
        `;
      });
    } catch (error) {
      console.error("Erro ao obter pets:", error);
      alert("Erro ao obter pets. Tente novamente mais tarde.");
    }
  }
};
export default ui;