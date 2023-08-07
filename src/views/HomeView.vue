<script>
  import DestaqueHome from '../components/pages/home/destaque.vue';
  import MostruarioLeilao from '../components/commun/grid/mostruarioLeilao.vue';

  export default{
    name:"HomeView",
    components:{
    DestaqueHome, MostruarioLeilao,
}
  }
</script>

<template>
  <main class="centroPagina">
    <DestaqueHome></DestaqueHome>
    <MostruarioLeilao></MostruarioLeilao>
  </main>
</template>

<style scoped>

</style>