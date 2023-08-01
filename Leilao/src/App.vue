<script >
import MainSection from './components/body/MainSection.vue';
import cabecarioMain from './components/cabecario/cabecario.vue';

  export default{
    components:{
    cabecarioMain,
    MainSection
}
  }

</script>

<template>
  <main>
    <cabecarioMain></cabecarioMain>
    <MainSection></MainSection>
  </main>
</template>

<style>
*{
  margin: 0;
  border: 0;
  text-decoration: none;
}

cabecarioMain{
  margin-bottom: 80px;
}

</style>
