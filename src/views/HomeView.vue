<script>
  import DestaqueHome from '../components/pages/home/destaque.vue';
  import MostruarioLeilao from '../components/pages/home/mostruarioLeilao.vue';

  export default{
    name:"HomeView",
    components:{
      DestaqueHome, MostruarioLeilao
    }
  }
</script>

<template>
  <main>
    <DestaqueHome></DestaqueHome>
    <MostruarioLeilao></MostruarioLeilao>
  </main>
</template>

<style scoped>

main{
  display: flex;
  flex-direction: column;
}
</style>