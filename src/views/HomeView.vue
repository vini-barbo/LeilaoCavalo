<script>
  import LinhaCommun from '../components/commun/linha.vue';
  import DestaqueHome from '../components/pages/home/destaque.vue';
  import MostruarioLeilao from '../components/pages/home/mostruarioLeilao.vue';

  export default{
    name:"HomeView",
    components:{
    DestaqueHome, MostruarioLeilao,
    LinhaCommun
}
  }
</script>

<template>
  <main>
    <DestaqueHome></DestaqueHome>
    <LinhaCommun></LinhaCommun>
    <MostruarioLeilao></MostruarioLeilao>
  </main>
</template>

<style scoped>

main{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>