<script setup>
import { RouterView } from 'vue-router'
import HeaderApp from './components/app/Header/header.vue'
import FooterApp from './components/app/Footer/footer.vue'
</script>

<template>
  <main class="body">

  <keep-alive>
  <HeaderApp></HeaderApp>
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

.centroPagina{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.linha{
    display: flex;
    width: 100%;
    height: 100px;
    background-color: white;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #1c1c1c;
    font-size: 3rem;
    font-weight: bolder;
}


</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap');

.body{
  background-color: #1c475e;
}

a:link{
  color: #1c1c1c;
}
a:visited {
  color: #1c1c1c;
}
a:hover {
  color: #1c1c1c;
}
a:active {
  color: #0369a2;
}

</style>
