const api = {
  async buscarInformacoesPets() {
    try {
      const response = await fetch('http://localhost:3000/pets');
      return await response.json();
    } catch (error) {
      alert('Erro ao buscar dados');
      throw error;
    }
  }
};

export default api;