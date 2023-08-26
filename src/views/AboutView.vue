<template>
  <div>
    <button @click="getLeiloes">Obter Leilões</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async getLeiloes() {
      try {
        const response = await axios.get('/backend/getData.php?getLeiloes=SIM');
        console.log(response.data);
        // Faça o que quiser com os dados recebidos, como atualizar o estado do componente.
      } catch (error) {
        console.error('Erro ao obter leilões:', error);
      }
    }
  }
};
</script>
