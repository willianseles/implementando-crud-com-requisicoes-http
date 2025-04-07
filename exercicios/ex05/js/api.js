const URL_BASE = "http://localhost:3000/pets";
const api = {
  async buscarInformacoesPets() {
    try {
      const response = await axios.get(`${URL_BASE}`);
      return await response.data;
    } catch (error) {
      alert('Erro ao buscar dados');
      throw error;
    }
  },


  async buscarPetPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}/${id}`);
      return await response.data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
      throw error;
    }
  },

  async salvarPet(pet) {
    try {
      const response = await axios.post(`${URL_BASE}`, pet);
      return await response.data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
      throw error;
    }
  },

  async editarPet(pet) {
    try {
      const response = await axios.put(`${URL_BASE}/${pet.id}`, pet);
      return await response.data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
      throw error;
    }
  },

  async deletarPet(id) {
    try {
      const response = await axios.delete(`${URL_BASE}/${id}`)
    } catch (error) {
      alert(`Erro: ${error.message}`);
      throw error;
    }
  }
};
export default api;