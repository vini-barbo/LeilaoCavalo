<script>
  import DestaqueHome from '../components/pages/home/destaque.vue';
  import MostruarioLeilao from '../components/commun/grid/mostruarioLeilao.vue';
  import cardsProdutos from '../components/commun/grid/cardsProdutos.vue';

  export default{
    name:"HomeView",
    components:{
    DestaqueHome, MostruarioLeilao, cardsProdutos,
}
  }
</script>

<template>
  <main class="centroPagina">
    <DestaqueHome></DestaqueHome>
    <MostruarioLeilao></MostruarioLeilao>
    <cardsProdutos></cardsProdutos>
  </main>
</template>

<style scoped>

</style>