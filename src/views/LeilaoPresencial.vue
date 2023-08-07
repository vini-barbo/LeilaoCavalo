<script>
import MostruarioLeilao from '../components/commun/grid/mostruarioLeilao.vue';
  export default{
    name:"LeilaoPresencial",

    components:{
      MostruarioLeilao
    }
  }
</script>

<template>
  <main class="centroPagina">
    <div class="linha">Leilões presenciais</div>
    <MostruarioLeilao></MostruarioLeilao>
  </main>
</template>


<style scoped>
</style>