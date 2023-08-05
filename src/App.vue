<script setup>
import { RouterView } from 'vue-router'
import HeaderApp from './components/app/Header/header.vue'
import FooterApp from './components/app/Footer/footer.vue'
</script>



<template>
  <HeaderApp></HeaderApp>
  <RouterView/>
  <FooterApp></FooterApp>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

<style scoped>


</style>
