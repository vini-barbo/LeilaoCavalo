<script setup>
import { RouterView } from 'vue-router'
import HeaderApp from './components/app/Header/header.vue'
import FooterApp from './components/app/Footer/footer.vue'
</script>


 
<template>
  <main class="body">

  <keep-alive>
  <HeaderApp style="margin-bottom: 20px;"></HeaderApp>
  </keep-alive>

  <RouterView/>

  <keep-alive>
  <FooterApp style="margin-top: 20px;"></FooterApp>
  </keep-alive>
</main>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap');

.body{
  background-color: #1c475e;
}

</style>
