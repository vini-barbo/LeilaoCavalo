<script setup>
import { RouterView } from 'vue-router'
import HeaderApp from './components/app/Header/header.vue'
import FooterApp from './components/app/Footer/footer.vue'
</script>



<template>
  <HeaderApp style="margin-bottom: 20px;"></HeaderApp>
  <RouterView/>
  <FooterApp style="margin-top: 20px;"></FooterApp>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

<style scoped>


</style>
